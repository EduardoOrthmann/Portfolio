import Button from '../components/Button';
import styles from '../styles/Projects.module.scss';

function Projects() {
  return (
    <section className={styles.container}>
      <h1 className={styles.headText}>Meus Projetos</h1>
      <ul className={styles.searchList}>
        {['UI/UX', 'ReactJS', 'Typescript', 'All'].map((name, i) => (
          <li key={i}>
            <Button color="secondary">{name}</Button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
