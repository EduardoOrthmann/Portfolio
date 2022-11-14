import Image from 'next/image';
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
      <h1 className={styles.headText}>Meus <span>Projetos</span></h1>
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
              {project.imageUrl.map((img, i) => (
                <Image
                  key={`${project.id}_${i}`}
                  src={img.url}
                  width={550}
                  height={300}
                  alt="foto do projeto"
                />
              ))}
            </Card.Image>
            <Card.Content>
              <div className={styles.content}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </Card.Content>
          </Card>
        ))}
        {/* <Card>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
            nemo quasi numquam, expedita ad reiciendis, iure, dolor explicabo
            esse repudiandae laboriosam rem soluta nam nesciunt dicta facere
            nihil architecto? Placeat aspernatur consequatur numquam ex, aut
            excepturi provident rem sequi dicta quia porro inventore autem sunt
            cumque laudantium debitis mollitia quidem, quisquam officiis,
            architecto officia eveniet. Rem enim atque, sequi quis quam eveniet
            ratione tenetur corrupti odit? Vel fuga iste minus facilis. Vel
            laudantium debitis doloremque nostrum omnis ab ut, rerum ipsum
            eaque! Ipsam consequuntur dicta delectus voluptatibus, porro ratione
            veniam praesentium modi dignissimos, tenetur id veritatis recusandae
            voluptatem blanditiis!
          </span>
        </Card>
        <Card>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
            nemo quasi numquam, expedita ad reiciendis, iure, dolor explicabo
            esse repudiandae laboriosam rem soluta nam nesciunt dicta facere
            nihil architecto? Placeat aspernatur consequatur numquam ex, aut
            excepturi provident rem sequi dicta quia porro inventore autem sunt
            cumque laudantium debitis mollitia quidem, quisquam officiis,
            architecto officia eveniet. Rem enim atque, sequi quis quam eveniet
            ratione tenetur corrupti odit? Vel fuga iste minus facilis. Vel
            laudantium debitis doloremque nostrum omnis ab ut, rerum ipsum
            eaque! Ipsam consequuntur dicta delectus voluptatibus, porro ratione
            veniam praesentium modi dignissimos, tenetur id veritatis recusandae
            voluptatem blanditiis!
          </span>
        </Card>
        <Card>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
            nemo quasi numquam, expedita ad reiciendis, iure, dolor explicabo
            esse repudiandae laboriosam rem soluta nam nesciunt dicta facere
            nihil architecto? Placeat aspernatur consequatur numquam ex, aut
            excepturi provident rem sequi dicta quia porro inventore autem sunt
            cumque laudantium debitis mollitia quidem, quisquam officiis,
            architecto officia eveniet. Rem enim atque, sequi quis quam eveniet
            ratione tenetur corrupti odit? Vel fuga iste minus facilis. Vel
            laudantium debitis doloremque nostrum omnis ab ut, rerum ipsum
            eaque! Ipsam consequuntur dicta delectus voluptatibus, porro ratione
            veniam praesentium modi dignissimos, tenetur id veritatis recusandae
            voluptatem blanditiis!
          </span>
        </Card>
        <Card>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
            nemo quasi numquam, expedita ad reiciendis, iure, dolor explicabo
            esse repudiandae laboriosam rem soluta nam nesciunt dicta facere
            nihil architecto? Placeat aspernatur consequatur numquam ex, aut
            excepturi provident rem sequi dicta quia porro inventore autem sunt
            cumque laudantium debitis mollitia quidem, quisquam officiis,
            architecto officia eveniet. Rem enim atque, sequi quis quam eveniet
            ratione tenetur corrupti odit? Vel fuga iste minus facilis. Vel
            laudantium debitis doloremque nostrum omnis ab ut, rerum ipsum
            eaque! Ipsam consequuntur dicta delectus voluptatibus, porro ratione
            veniam praesentium modi dignissimos, tenetur id veritatis recusandae
            voluptatem blanditiis!
          </span>
        </Card>
        <Card>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
            nemo quasi numquam, expedita ad reiciendis, iure, dolor explicabo
            esse repudiandae laboriosam rem soluta nam nesciunt dicta facere
            nihil architecto? Placeat aspernatur consequatur numquam ex, aut
            excepturi provident rem sequi dicta quia porro inventore autem sunt
            cumque laudantium debitis mollitia quidem, quisquam officiis,
            architecto officia eveniet. Rem enim atque, sequi quis quam eveniet
            ratione tenetur corrupti odit? Vel fuga iste minus facilis. Vel
            laudantium debitis doloremque nostrum omnis ab ut, rerum ipsum
            eaque! Ipsam consequuntur dicta delectus voluptatibus, porro ratione
            veniam praesentium modi dignissimos, tenetur id veritatis recusandae
            voluptatem blanditiis!
          </span>
        </Card>
        <Card>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas
            nemo quasi numquam, expedita ad reiciendis, iure, dolor explicabo
            esse repudiandae laboriosam rem soluta nam nesciunt dicta facere
            nihil architecto? Placeat aspernatur consequatur numquam ex, aut
            excepturi provident rem sequi dicta quia porro inventore autem sunt
            cumque laudantium debitis mollitia quidem, quisquam officiis,
            architecto officia eveniet. Rem enim atque, sequi quis quam eveniet
            ratione tenetur corrupti odit? Vel fuga iste minus facilis. Vel
            laudantium debitis doloremque nostrum omnis ab ut, rerum ipsum
            eaque! Ipsam consequuntur dicta delectus voluptatibus, porro ratione
            veniam praesentium modi dignissimos, tenetur id veritatis recusandae
            voluptatem blanditiis!
          </span>
        </Card> */}
      </div>
    </section>
  );
}

export default Projects;
