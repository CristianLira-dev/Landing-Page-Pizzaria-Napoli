import styles from './SectionHero.module.css'
import Button from '../button/Button';
import ListaIngredientes from "../IngredientesFlutuando/ListaIngredientes";

function SectionHero() {
    return (
      <section className={styles.SectionHero} id="SectionHero">
        <ListaIngredientes />

        <h1 className={styles.titulo}>A Verdadeira Alma de Napoli.</h1>
        <p className={styles.subtitulo}>
          Tradição artesanal e ingredientes selecionados em uma experiência
          gastronômica única.
            </p>
            
            <Button>Ver Cardápio</Button>
      </section>
    );
}

export default SectionHero;