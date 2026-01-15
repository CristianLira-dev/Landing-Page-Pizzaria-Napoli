import styles from "./SectionSobre.module.css";
import Button from "../button/Button"

function SectionSobre() {
  return (
    <section className={styles.sectionSobre} aria-label="Sobre a Empresa">
      <div className={styles.container}>
        <div className={styles.visualColumn}>
          <div className={styles.blobWrapper}>
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.blobIcon}
            >
              <path
                fill="#C92A2A"
                d="M42.7,-72.8C54.9,-67.1,64.1,-55.4,70.8,-43.1C77.5,-30.8,81.7,-17.9,80.6,-5.5C79.5,6.9,73.1,18.8,65.2,29.3C57.3,39.8,47.9,48.9,37.3,55.4C26.7,61.9,14.9,65.8,2.3,61.8C-10.3,57.8,-23.7,45.9,-35.4,34.8C-47.1,23.7,-57.1,13.4,-60.8,1.2C-64.5,-11,-61.9,-25.1,-53.8,-36.8C-45.7,-48.5,-32.1,-57.8,-18.8,-62.7C-5.5,-67.6,7.5,-68.1,20.5,-72.8Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>

        {/* Coluna de Texto (Direita no Desktop) */}
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
          <Button>Saiba Mais</Button>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;
