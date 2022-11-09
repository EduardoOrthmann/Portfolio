import Image from 'next/image';
import { PaperPlaneRight } from 'phosphor-react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { useGetProfileQuery } from '../graphql/generated';
import styles from '../styles/HomePage.module.scss';

function HomePage() {
  const { data } = useGetProfileQuery();

  if (!data?.profile) {
    return <p>Error...</p>;
  }

  return (
    <section id="home" className={styles.home}>
      <motion.div className={styles.titles} whileInView={{ opacity: [0, 1] }}>
        <motion.h1
          whileInView={{ x: [-100, 0] }}
          transition={{ duration: 0.5 }}
        >
          Oi, eu sou {data.profile.name}
        </motion.h1>
        <h5>{data.profile.headline}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et
          sapiente odio nam nesciunt?
        </p>
        <Button icon={<PaperPlaneRight size={24} />}>Me Contate</Button>
      </motion.div>
      <div>
        <motion.div
          className={styles.imageBg}
          animate={{ y: [null, -20, 0] }}
          transition={{ type: 'spring', repeat: Infinity, mass: 0.1, duration: 4 }}
        >
          <Image
            src={data.profile.imageUrl.url}
            width={400}
            height={400}
            alt="foto de perfil"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HomePage;
