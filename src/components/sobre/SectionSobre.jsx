import styles from "./SectionSobre.module.css";
import Button from "../button/Button"

function SectionSobre() {
  return (
    <section className={styles.sectionSobre} aria-label="Sobre a Empresa">
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h1>Sobre Nós</h1>
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
          <div className={styles.btn}>
            <Button>Saiba Mais</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;
