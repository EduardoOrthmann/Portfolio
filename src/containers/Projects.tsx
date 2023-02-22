/* eslint-disable no-nested-ternary */
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Eye } from 'phosphor-react';
import { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import HeadTitle from '../components/HeadTitle';
import { useGetProjectsQuery, useGetProjectsTagsQuery } from '../graphql/generated';
import styles from '../styles/Projects.module.scss';

function Projects() {
  const { data: projectData } = useGetProjectsQuery();
  const { data: tagsData } = useGetProjectsTagsQuery();
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [showMore, setShowMore] = useState<boolean>(false);

  if (!projectData?.projects || !tagsData?.projectTags) {
    return <p>...</p>;
  }

  const allTags = ['Todos'];
  tagsData.projectTags.map((tag) => allTags.push(tag.tag));

  const filteredProjects = projectData.projects.filter((project) => {
    if (selectedFilter !== 'Todos') {
      return project.tags.some((tag) => tag.tag.includes(selectedFilter));
    }

    return project;
  });

  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 6);
  const showLoadMoreButton = filteredProjects.length > 6;

  return (
    <section id="projects" className={styles.container}>
      <HeadTitle>
        Meus <span>Projetos</span>
      </HeadTitle>
      <ul className={styles.searchList}>
        {allTags.map((name) => (
          <li key={name}>
            <Button color="white" onClick={() => setSelectedFilter(name)} isSelected={selectedFilter === name}>
              {name}
            </Button>
          </li>
        ))}
      </ul>
      <motion.div className={styles.projects} whileInView={{ opacity: [0, 1] }}>
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <Card.Image>
                  <div className={styles.image} key={project.imageUrl.url}>
                    <motion.div
                      className={styles.imageOverlay}
                      whileHover={{ opacity: [0, 1] }}
                      transition={{
                        duration: 0.25,
                        ease: 'easeInOut',
                        staggerChildren: 0.5,
                      }}
                    >
                      <a href={project.codeURL} target="_blank" rel="noreferrer" title="vizualizar código do projeto">
                        <motion.div whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }}>
                          <Code size={32} />
                        </motion.div>
                      </a>
                      {project.projectURL && (
                        <a href={project.projectURL} target="_blank" rel="noreferrer" title="vizualizar projeto online">
                          <motion.div whileHover={{ scale: [1, 0.9] }} transition={{ duration: 0.25 }}>
                            <Eye size={32} />
                          </motion.div>
                        </a>
                      )}
                    </motion.div>
                    <Image src={project.imageUrl.url} width={550} height={300} alt="foto do projeto" />
                  </div>
                </Card.Image>
                <Card.Content>
                  <div className={styles.content}>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                </Card.Content>
                <div className={styles.tagsContainer}>
                  <span>Tags:</span>
                  <div className={styles.tags}>
                    {project.tags.map(
                      ({
                        tag,
                        backgroundColor: {
                          rgba: { r, g, b, a },
                        },
                        id,
                      }) => (
                        <span
                          key={id}
                          style={{
                            backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
                          }}
                        >
                          <p>{tag}</p>
                        </span>
                      )
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {showLoadMoreButton && !showMore ? (
        <span className={styles.loadMoreBtn}>
          <Button color="blueHover" onClick={() => setShowMore(true)}>
            Carregar Mais
          </Button>
        </span>
      ) : showLoadMoreButton ? (
        <span className={styles.loadMoreBtn}>
          <Button color="blueHover" onClick={() => setShowMore(false)}>
            Recolher
          </Button>
        </span>
      ) : null}
    </section>
  );
}

export default Projects;
