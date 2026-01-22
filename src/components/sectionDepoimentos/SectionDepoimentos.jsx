import styles from "./SectionDepoimentos.module.css";
import depoimentosData from "../../assets/JSON/depoimentos.js";

function SectionDepoimentos() {

  const cardColors = [styles.cardAmarelo, styles.cardVerde, styles.cardRose];

  return (
    <section
      className={styles.sectionDepoimentos}
      aria-labelledby="titulo-depoimentos"
    >
      <div className={styles.container}>
        <header className={styles.headerSection}>
          <h2 id="titulo-depoimentos">Quem prova, se apaixona</h2>
          <p>Veja o que os nossos clientes dizem sobre a experiência Napoli.</p>
        </header>

        <div className={styles.gridCards}>
          {depoimentosData.map((item, index) => {
            const corAtual = cardColors[index % cardColors.length];

            return (
              <figure key={item.id} className={`${styles.card} ${corAtual}`}>
                <div className={styles.pin}></div>
                <div className={styles.imgWrapper}>
                  <img
                    src={item.img}
                    alt={`Foto do cliente ${item.nome}`}
                    loading="lazy"
                  />
                </div>

                <blockquote className={styles.textoDepoimento}>
                  "{item.depoimento}"   
                </blockquote>

                <figcaption className={styles.infoCliente}>
                  <strong>{item.nome}</strong>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionDepoimentos;
