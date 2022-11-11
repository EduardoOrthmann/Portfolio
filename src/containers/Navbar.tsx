import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  const links = [
    { name: 'Home', to: '#home', id: 1 },
    { name: 'Projetos', to: '#projects', id: 2 },
    { name: 'Habilidades', to: '#skills', id: 3 },
    { name: 'Contato', to: '#contact', id: 4 },
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
        {links.map(({ name, to, id }) => (
          <li key={id}>
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
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <X size={34} onClick={() => setToggleNavbar(false)} />
                <ul>
                  {links.map(({ name, to, id }) => (
                    <li key={id}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.a
                          href={to}
                          onClick={() => setToggleNavbar(false)}
                          variants={itemVariants}
                        >
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
