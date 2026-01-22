import styles from "./SectionSobre.module.css";
import Button from "../button/Button";
import Pizza from "../../assets/images/pizza-SectionSobre.png";

function SectionSobre() {
  return (
    <section className={styles.sectionSobre} aria-label="Sobre a Empresa">
      <div className={styles.container}>
        <img
          src={Pizza}
          alt="Pizza Marguerita artesanal com ingredientes frescos"
          className={styles.pizzaImage}
          loading="lazy"
        />

        <div className={styles.textColumn}>
          <h2>Sobre Nós</h2>
          <p>
            Nossa história começou muito antes de abrirmos as portas. Ela veio
            na mala do fundador Luigi, trazida diretamente de Nápoles junto com
            o Lievito Madre (fermento natural) da família.
          </p>
          <p>
            O que nasceu como um sonho em um forno de quintal, hoje é referência
            de qualidade. Há mais de <strong>40 anos</strong>, mantemos a
            essência intocada: massa de fermentação lenta, forno a lenha e o
            verdadeiro sabor italiano. Na Napoli, servimos mais que pizza;
            servimos história.
          </p>

          <div className={styles.Botao}>
            <Button>Saiba Mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;
