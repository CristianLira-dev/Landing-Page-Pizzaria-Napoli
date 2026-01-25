import { useState } from "react";
import styles from "./Header.module.css";
import logoNapoli from "../../assets/images/napoli.png";
import Button from "../button/Button.jsx";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.Divlogo}>
        <img
          src={logoNapoli}
          className={styles.logo}
          alt="Logo da Pizzaria Napoli"
        />
      </div>

      {/* Botão Hambúrguer - Visível apenas no mobile */}
      <button
        className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={toggleMenu}
        aria-label="Abrir menu de navegação"
        aria-expanded={menuOpen}
      >
        <span className={styles.hamburger}></span>
      </button>

      {/* Navegação - Classe dinâmica baseada no estado */}
      <nav
        className={`${styles.navMenu} ${menuOpen ? styles.navActive : ""}`}
        aria-label="Menu Principal"
      >
        <ul className={styles.navList}>
          <li>
            <a
              className={styles.linkNav}
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              className={styles.linkNav}
              href="#sobre"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              className={styles.linkNav}
              href="#cardapio"
              onClick={() => setMenuOpen(false)}
            >
              Cardápio
            </a>
          </li>
          <li>
            <a
              className={styles.linkNav}
              href="#contato"
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </a>
          </li>
          {/* O botão de pedido aparece dentro do menu no mobile para melhor UX */}
          <li className={styles.mobileOnly}>
            <Button>Faça Seu Pedido</Button>
          </li>
        </ul>
      </nav>

      <div className={styles.desktopOnly}>
        <Button>Faça Seu Pedido</Button>
      </div>
    </header>
  );
}

export default Header;
