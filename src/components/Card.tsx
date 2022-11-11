import styles from '../styles/Card.module.scss';

interface CardProps {
  children: JSX.Element;
}

function Card({ children, ...rest }: CardProps) {
  return (
    <div className={styles.card} {...rest}>
      {children}
    </div>
  );
}

Card.Content = ({ children }: CardProps) => {
  <>{children}</>;
};

Card.Image = ({ children }: CardProps) => {
  <>{children}</>;
};

export default Card;
