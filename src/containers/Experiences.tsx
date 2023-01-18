import { Briefcase, CalendarBlank, GraduationCap } from 'phosphor-react';
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
                  contentArrowStyle={{ borderRight: '7px solid  #edf2f8' }}
                  contentStyle={{ background: '#edf2f8', color: '#000', borderTop: '5px solid #313bac' }}
                >
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
                </VerticalTimelineElement>
              ))
            : academicData.academicExperiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.id}
                  icon={<Briefcase size={32} />}
                  iconStyle={{ background: '#313bac', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  #edf2f8' }}
                  contentStyle={{ background: '#edf2f8', color: '#000', borderTop: '5px solid #313bac' }}
                >
                  <h3>{experience.title}</h3>
                  <details>
                    <summary>{experience.institute}</summary>
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
                </VerticalTimelineElement>
              ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experiences;
