import styles from "../sectionCards/SectionCards.module.css";
import pizzaData from "../../assets/JSON/pizzas"
import PizzaCard from "../pizzaCard/PizzaCard";
import Button from "../button/Button"
function SectionCards() {
        if (!pizzaData || pizzaData.length === 0) {
          return null;
        }

    return (
      <section id="cardapio" className={styles.SectionCards}>
        <div className={styles.header}>
          <h1 className={styles.tituloSection}>Nossas Pizzas</h1>
          <hr className={styles.line} />
        </div>

        <div className={styles.conteiner}>
          {pizzaData.map((pizza) => (
            <PizzaCard
              key={pizza.id}
              title={pizza.title}
              description={pizza.fullDescription}
              price={pizza.price}
              img={pizza.img}
              alt={pizza.alt}
            />
          ))}
        </div>
        <div className={styles.btnCardapio}>
          <Button>Ver Cardápio Completo</Button>
        </div>
      </section>
    );
}

export default SectionCards;