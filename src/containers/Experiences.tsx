import { Briefcase, CalendarBlank, CaretDown, GraduationCap } from 'phosphor-react';
import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Button from '../components/Button';
import { useGetWorkExperiencesQuery, useGetAcademicExperiencesQuery } from '../graphql/generated';
import styles from '../styles/Experiences.module.scss';
import 'react-vertical-timeline-component/style.min.css';

function Experiences() {
  const buttonNames = [
    {
      name: 'Profissional',
      icon: <Briefcase size={32} />,
    },
    {
      name: 'Acadêmico',
      icon: <GraduationCap size={32} />,
    },
  ];

  const { data: workData } = useGetWorkExperiencesQuery();
  const { data: academicData } = useGetAcademicExperiencesQuery();
  const [active, setActive] = useState(buttonNames[0].name);

  if (!workData?.workExperiences || !academicData?.academicExperiences) {
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

        <VerticalTimeline lineColor=" #313bac">
          {active === buttonNames[0].name
            ? workData.workExperiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.id}
                  icon={<Briefcase size={32} />}
                  iconStyle={{ background: '#313bac', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid #fff' }}
                  contentStyle={{
                    background: '#fff',
                    color: '#000',
                    borderTop: '5px solid #313bac',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    display: 'grid',
                    gap: '0.5rem',
                  }}
                >
                  <h3>{experience.role}</h3>
                  <details>
                    <summary>
                      <span className={styles.summaryTitle}>{experience.company}</span>
                      <CaretDown size={20} />
                    </summary>
                    <div className={styles.summaryContent}>{experience.description}</div>
                  </details>
                  <div className={styles.experienceDuration}>
                    <CalendarBlank size={20} />
                    <span>
                      {experience.endDate
                        ? `${new Date(experience.startDate).getFullYear()} - ${new Date(
                            experience.endDate
                          ).getFullYear()}`
                        : `${new Date(experience.startDate).getFullYear()} - presente`}
                    </span>
                  </div>
                </VerticalTimelineElement>
              ))
            : academicData.academicExperiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.id}
                  icon={<Briefcase size={32} />}
                  iconStyle={{ background: '#313bac', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid #fff' }}
                  contentStyle={{
                    background: '#fff',
                    color: '#000',
                    borderTop: '5px solid #313bac',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    display: 'grid',
                    gap: '0.5rem',
                  }}
                >
                  <h3>{experience.title}</h3>
                  <span className={styles.summaryTitle}>{experience.institute}</span>
                  <div className={styles.experienceDuration}>
                    <CalendarBlank size={20} />
                    <span>
                      {experience.endDate
                        ? `${new Date(experience.startDate).getFullYear()} - ${new Date(
                            experience.endDate
                          ).getFullYear()}`
                        : `${new Date(experience.startDate).getFullYear()} - presente`}
                    </span>
                  </div>
                </VerticalTimelineElement>
              ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experiences;
