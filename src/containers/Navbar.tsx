import styles from '../styles/Navbar.module.scss';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
