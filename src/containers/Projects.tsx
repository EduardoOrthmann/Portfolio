import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Eye } from 'phosphor-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useGetProjectsQuery } from '../graphql/generated';
import styles from '../styles/Projects.module.scss';

function Projects() {
  const { data } = useGetProjectsQuery();

  if (!data?.projects) {
    return <p>Error...</p>;
  }

  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.headText}>
        Meus <span>Projetos</span>
      </h1>
      <ul className={styles.searchList}>
        {['UI/UX', 'ReactJS', 'Typescript', 'All'].map((name, i) => (
          <li key={i}>
            <Button color="secondary">{name}</Button>
          </li>
        ))}
      </ul>
      <div className={styles.projects}>
        {data.projects.map((project) => (
          <Card key={project.id}>
            <Card.Image>
              <div className={styles.image}>
                <motion.div
                  className={styles.imageOverlay}
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    staggerChildren: 0.5,
                  }}
                >
                  <a href={project.codeURL} target="_blank" rel="noreferrer">
                    <motion.div
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <Code size={32} />
                    </motion.div>
                  </a>
                  {project.projectURL && (
                    <a
                      href={project.projectURL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <motion.div
                        whileHover={{ scale: [1, 0.9] }}
                        transition={{ duration: 0.25 }}
                      >
                        <Eye size={32} />
                      </motion.div>
                    </a>
                  )}
                </motion.div>
                {project.imageUrl.map((img, i) => (
                  <Image
                    key={`${project.id}_${i}`}
                    src={img.url}
                    width={550}
                    height={300}
                    alt="foto do projeto"
                  />
                ))}
                <span>{project.tags[0]}</span>
              </div>
            </Card.Image>
            <Card.Content>
              <div className={styles.content}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
