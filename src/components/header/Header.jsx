import styles from "./Header.module.css";
import logoNapoli from "../../assets/images/napoli.png";
import Button from "../button/Button.jsx"
function Header () {
  return (
    // Usa a classe como propriedade do objeto styles
    <header className={styles.headerContainer}>
          <div className={styles.Divlogo}>
              <img src={logoNapoli} className={styles.logo} alt="Logo da Pizzaria Napoli" />
      </div>

      <nav className={styles.navMenu} aria-label="Menu Principal">
        <ul>
          <li>
            <a className={styles.linkNav} href="#home">Início</a>
          </li>
          <li>
            <a className={styles.linkNav} href="#sobre">Sobre Nós</a>
          </li>
          <li>
            <a className={styles.linkNav} href="#cardapio">Cardápio</a>
          </li>
          <li>
            <a className={styles.linkNav} href="#contato">Contato</a>
          </li>
        </ul>
          </nav>
          
          <div>
              <Button>Faça Seu Pedido</Button>
          </div>

    </header>
  );
};

export default Header;
