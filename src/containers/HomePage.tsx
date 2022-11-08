import Image from 'next/image';
import { PaperPlaneRight } from 'phosphor-react';
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
      <div className={styles.titles}>
        <h1>Oi, eu sou {data.profile.name}</h1>
        <h5>{data.profile.headline}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias et
          sapiente odio nam nesciunt?
        </p>
        <Button icon={<PaperPlaneRight size={24} />}>Me Contate</Button>
      </div>
      <div>
        <div className={styles.imageBg}>
          <Image
            src={data.profile.imageUrl.url}
            width={400}
            height={400}
            alt="foto de perfil"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
