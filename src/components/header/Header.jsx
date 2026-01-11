import styles from "./Header.module.css";
import logoNapoli from "../../assets/images/napoli.png";
function Header () {
  return (
    // Usa a classe como propriedade do objeto styles
    <header className={styles.headerContainer}>
          <div className={styles.logo}>
              <img src={logoNapoli} className={styles.logo} alt="Logo da Pizzaria Napoli" />
      </div>

      <nav className={styles.navMenu} aria-label="Menu Principal">
        <ul>
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#cardapio">Cardápio</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
          </nav>
          
          <div>
              <button>Faça seu Pedido</button>
          </div>

    </header>
  );
};

export default Header;
