import styles from "../sectionPizza/SectionPizza.module.css";
import Button from "../button/Button";

function SectionPizzas() {
  return (
    <section className={styles.SectionPreparo} aria-labelledby="titulo-preparo">
      <div className={styles.conteinerCentral}>
        <div className={styles.colunaTexto}>
          <h2 id="titulo-preparo">O Segredo da Nossa Fermentação Natural</h2>

          <p>
            O segredo da nossa leveza reside na paciência. Trabalhamos com um
            processo rigoroso de <strong>maturação lenta de 48 horas</strong>.
            Isso permite que a massa desenvolva uma estrutura de glúten
            perfeita, resultando em uma borda alveolada, crocante e de fácil
            digestão.
          </p>

          <p>
            Nossa busca pela excelência se estende aos insumos. Utilizamos
            farinha italiana certificada e ingredientes importados dos
            produtores mais respeitados do mercado. Cada pizza é o resultado de
            uma curadoria minuciosa, garantindo o padrão <em>gourmet</em> em
            cada fatia.
          </p>

          <div className={styles.Botao}>
            <Button>Conheça o Cardápio</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionPizzas;
