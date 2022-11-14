import styles from '../styles/Card.module.scss';

interface CardProps {
  children: JSX.Element | JSX.Element[];
}

function Card({ children }: CardProps) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}

Card.Content = ({ children }: CardProps) => (
  <div>{children}</div>
);

Card.Image = ({ children }: CardProps) => (
  <div className={styles.image}>{children}</div>
);

export default Card;
