import { Briefcase, GraduationCap } from 'phosphor-react';
import { useGetWorkExperiencesQuery } from '../graphql/generated';
import styles from '../styles/Experiences.module.scss';

function Experiences() {
  const { data } = useGetWorkExperiencesQuery();

  if (!data?.workExperiences) {
    return <p>...</p>;
  }

  return (
    <section id="experiences" className={styles.container}>
      <header>
        <h1 className={styles.headText}>Experiências</h1>
        <span className={styles.subtext}>Minha jornada pessoal</span>
      </header>
      <div className={styles.experiencesContainer}>
        <div className={styles.experiencesNav}>
          <span>
            <GraduationCap size={32} />
            Acadêmica
          </span>
          <span>
            <Briefcase size={32} />
            Profissional
          </span>
        </div>
        <div className={styles.experiencesContent}>
          {data.workExperiences.map((experience) => (
            <div key={experience.id}>
              <h2>{experience.role}</h2>
              <div>
                <span>{experience.company}</span>
                {/* colocar setinha de abre e fecha para a descrição */}
                <p>{experience.description}</p>
              </div>
              <span>
                {new Date(experience.startDate).getFullYear()} - {new Date(experience.endDate).getFullYear()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
