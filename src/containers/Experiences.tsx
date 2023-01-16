import { Briefcase, CalendarBlank, GraduationCap } from 'phosphor-react';
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
          <span className={styles.centerLine}></span>
          {data.workExperiences.map((experience) => (
            <div key={experience.id} className={styles.experienceItem}>
              <h3>{experience.role}</h3>
              <details>
                <summary>{experience.company}</summary>
                <p>{experience.description}</p>
              </details>
              <span className={styles.experienceDuration}>
                <CalendarBlank size={20} />
                <p>
                  {experience.endDate
                    ? `${new Date(experience.startDate).getFullYear()} - ${new Date(experience.endDate).getFullYear()}`
                    : `${new Date(experience.startDate).getFullYear()} - presente`}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
