import styles from '../styles/ErrorSvg.module.scss';

function ErrorSvg() {
  return (
    <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle className={styles.checkmark_circle} cx="26" cy="26" r="25" fill="none" />
      <path className={styles.checkmark_check} strokeLinecap="round" fill="none" d="M16 16 36 36 M36 16 16 36" />
    </svg>
  );
}

export default ErrorSvg;
