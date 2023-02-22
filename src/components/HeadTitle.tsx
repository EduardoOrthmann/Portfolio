import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '../styles/HeadTitle.module.scss';

interface HeadTitleProps {
  children: ReactNode;
}

function HeadTitle({children}: HeadTitleProps) {
  return (
    <motion.h1
        className={styles.headText}
        whileInView={{ opacity: [0, 1], scale: [1.2, 1] }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.h1>
  )
}

export default HeadTitle