import { List, X } from 'phosphor-react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  const list = {
    id: ['home', 'about', 'projects', 'skills', 'contact'],
    displayName: ['Home', 'Sobre', 'Projetos', 'Habilidades', 'Contato'],
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        {list.id.map((id, i) => (
          <li key={id}>
            <a href={`#${id}`}>{list.displayName[i]}</a>
          </li>
        ))}
      </ul>

      <div className={styles.menu}>
        <List size={32} onClick={() => setToggleNavbar(true)} />

        {toggleNavbar && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <X size={32} onClick={() => setToggleNavbar(false)} />
            <ul>
              {list.id.map((id, i) => (
                <li key={id}>
                  <a href={`#${id}`} onClick={() => setToggleNavbar(false)}>
                    {list.displayName[i]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
