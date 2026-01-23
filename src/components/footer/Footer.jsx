import styles from "./Footer.module.css";
import LogoPizzaria from "../../assets/images/napoli-branco.png";

function Footer() {
  const Ano = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.colunaLogo}>
            <img
              src={LogoPizzaria}
              alt="Pizzaria Napoli - O verdadeiro sabor italiano"
              className={styles.logo}
            />
            <p className={styles.slogan}>
              Tradição, fermentação natural e amor em cada fatia.
            </p>
          </div>

          <div className={styles.colunaInfo}>
            <h3>Onde Estamos</h3>
            <address>
              Rua das Margaridas, 123
              <br />
              Bairro Jardins - São Paulo/SP
              <br />
              <a href="tel:+5511999999999" className={styles.linkContato}>
                (11) 99999-9999
              </a>
            </address>
          </div>

          <div className={styles.colunaInfo}>
            <h3>Horários</h3>
            <ul>
              <li>Ter - Qui: 18h às 23h</li>
              <li>Sex - Dom: 18h às 00h</li>
              <li>Segunda: Fechado</li>
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.copyrightSection}>
          <p>
            &copy; {Ano} Pizzaria Napoli. Todos os direitos reservados.
          </p>
          <p className={styles.credits}>
            Desenvolvido por Cristian Lira
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
