import classNames from 'classnames';
import { motion } from 'framer-motion';
import { CSSProperties } from 'react';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'purple' | 'backgroundless';
  disabled?: boolean;
  type?: 'button' | 'submit';
  icon?: JSX.Element;
  isSelected?: boolean;
  styles?: CSSProperties;
  error?: boolean;
}

function Button({
  icon,
  onClick,
  children,
  color = 'primary',
  disabled,
  type = 'button',
  isSelected = false,
  error = false,
}: ButtonProps) {
  return (
    <motion.button
      className={classNames(styles.btn, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.purple]: color === 'purple',
        [styles.backgroundless]: color === 'backgroundless',
        [styles.selected]: isSelected === true,
        [styles.error]: error === true,
      })}
      type={type}
      onClick={onClick}
      color={color}
      disabled={disabled}
      style={styles}
    >
      {children}
      {icon}
    </motion.button>
  );
}

export default Button;
