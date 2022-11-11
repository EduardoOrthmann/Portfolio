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
      <h1 className={styles.headText}>Meus Projetos</h1>
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
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              voluptates dicta beatae fugit facere consequatur, obcaecati
              possimus reiciendis doloribus minus quam quasi quae unde a
              distinctio non tempora? Incidunt, cum. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Itaque omnis pariatur accusamus!
              Voluptate explicabo nisi aliquid. Repellat dolorem dignissimos
              earum. Animi id amet dolorem error, blanditiis totam numquam
              molestiae? Molestiae sapiente praesentium quos eligendi nam
              deleniti debitis laudantium accusamus assumenda quod culpa
              exercitationem, quibusdam dolorum provident dignissimos eaque
              labore maxime ipsum cupiditate nostrum dolor aperiam rerum. Error
              dolorem sit iste consequuntur deleniti. Aspernatur magni nemo
              inventore, explicabo est recusandae expedita!
              {project.title}
            </span>
          </Card>
        ))}
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
      </div>
    </section>
  );
}

export default Projects;
