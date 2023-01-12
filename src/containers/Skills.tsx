import Image from 'next/image';
import { useGetSkillsQuery } from '../graphql/generated';
import styles from '../styles/Skills.module.scss';

function Skills() {
  const { data } = useGetSkillsQuery();

  if (!data?.skills) {
    return <p>...</p>;
  }

  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.headText}>Habilidades</h1>
      <div className={styles.skillsList}>
        {data.skills.map((skill) => (
          <div key={skill.id} className={styles.skillItem}>
            <div style={{ backgroundColor: skill.bgColor?.hex }}>
              <Image
                src={skill.iconUrl.url}
                width={300}
                height={300}
                alt="foto da tecnologia"
              />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
