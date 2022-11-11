import classNames from 'classnames';
import styles from '../styles/Button.module.scss';

interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'purple';
  disabled?: boolean;
  type?: 'button' | 'submit';
  icon?: JSX.Element;
}

function Button({
  icon,
  onClick,
  children,
  color = 'primary',
  disabled,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.btn, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.purple]: color === 'purple',
      })}
      type={type}
      onClick={onClick}
      color={color}
      disabled={disabled}
    >
      {children}
      {icon}
    </button>
  );
}

export default Button;
