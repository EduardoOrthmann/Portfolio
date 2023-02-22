import { List, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/Navbar.module.scss';

interface NavbarLinks {
  name: string;
  id: string;
}

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const onScroll = () => {
      const { innerHeight, scrollY } = window;

      const activeSection = links.reduce<{ id: string; distance: number } | null>((prev, current) => {
        const element = document.querySelector(current.id);

        if (!element) return prev;

        const { top, height } = element.getBoundingClientRect();
        const sectionTop = top + scrollY;
        const distance = Math.abs(sectionTop + height / 2 - (scrollY + innerHeight / 2));

        if (prev === null || distance < prev.distance) {
          return { id: current.id, distance };
        }

        return prev;
      }, null);

      if (activeSection?.id) setActive(activeSection.id);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const links: NavbarLinks[] = [
    { name: 'Home', id: '#home' },
    { name: 'Projetos', id: '#projects' },
    { name: 'Habilidades', id: '#skills' },
    { name: 'Experiências', id: '#experiences' },
    { name: 'Contato', id: '#contact' },
  ];

  const itemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        {links.map(({ name, id: to }) => (
          <li key={name} className={`${active === to ? styles.active : ''}`}>
            <a href={to}>{name}</a>
          </li>
        ))}
      </ul>

      <div className={styles.menu}>
        <List size={34} onClick={() => setToggleNavbar(true)} />

        <AnimatePresence>
          {toggleNavbar && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.5, duration: 0.3 },
              }}
            >
              <motion.div initial="closed" animate="open" exit="closed" variants={sideVariants}>
                <X size={34} onClick={() => setToggleNavbar(false)} />
                <ul>
                  {links.map(({ name, id: to }) => (
                    <li key={name}>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <motion.a href={to} onClick={() => setToggleNavbar(false)} variants={itemVariants}>
                          {name}
                        </motion.a>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
