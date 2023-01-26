import styles from '../styles/SuccessSvg.module.scss';

function SuccessSvg() {
  return (
    <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle className={styles.checkmark_circle} cx="26" cy="26" r="25" fill="none" />
      <path className={styles.checkmark_check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" stroke-linecap="round" />
    </svg>
  );
}

export default SuccessSvg;
