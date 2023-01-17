import { Briefcase, CalendarBlank, GraduationCap } from 'phosphor-react';
import { useState } from 'react';
import Button from '../components/Button';
import { useGetWorkExperiencesQuery } from '../graphql/generated';
import styles from '../styles/Experiences.module.scss';

function Experiences() {
  const buttonNames = [
    {
      name: 'Acadêmico',
      icon: <GraduationCap size={32} />,
    },
    {
      name: 'Profissional',
      icon: <Briefcase size={32} />,
    },
  ];

  const { data } = useGetWorkExperiencesQuery();
  const [active, setActive] = useState(buttonNames[0].name);

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
          {buttonNames.map(({ name, icon }) => (
            <Button key={name} color="backgroundless" onClick={() => setActive(name)} isSelected={active === name}>
              {icon}
              {name}
            </Button>
          ))}
        </div>

        <div className={styles.experiencesContent}>
          <span className={styles.line}></span>
          {data.workExperiences.map((experience) => (
            <div key={experience.id} className={styles.experienceItem}>
              <div>
                <h3>{experience.role}</h3>
                <details>
                  <summary>{experience.company}</summary>
                  <p>{experience.description}</p>
                </details>
                <span className={styles.experienceDuration}>
                  <CalendarBlank size={20} />
                  <p>
                    {experience.endDate
                      ? `${new Date(experience.startDate).getFullYear()} - ${new Date(
                          experience.endDate
                        ).getFullYear()}`
                      : `${new Date(experience.startDate).getFullYear()} - presente`}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
