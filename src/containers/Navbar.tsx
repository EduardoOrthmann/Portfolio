function Navbar() {
  return (
    <nav className="w-full px-8 py-4 fixed backdrop-blur-sm border border-solid border-[#ffffff2E] bg-[#ffffff40]">
      <ul className="uppercase flex justify-center items-center gap-4 text-gray-color font-medium text-sm">
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
