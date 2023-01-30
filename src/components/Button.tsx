import classNames from 'classnames';
import { CSSProperties, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'purple' | 'backgroundless';
  disabled?: boolean;
  type?: 'button' | 'submit';
  icon?: JSX.Element;
  isSelected?: boolean;
  style?: CSSProperties;
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
  style,
}: ButtonProps) {
  const [shake, setShake] = useState(false);

  useEffect(() => click(), [error]);

  const click = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (error) {
      setShake(true);
      setTimeout(() => setShake(false), 1000);
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      className={classNames(styles.btn, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.purple]: color === 'purple',
        [styles.backgroundless]: color === 'backgroundless',
        [styles.selected]: isSelected === true,
        [styles.error]: shake === true,
      })}
      type={type}
      onClick={click}
      color={color}
      disabled={disabled}
      style={style}
    >
      {children}
      {icon}
    </motion.button>
  );
}

export default Button;
