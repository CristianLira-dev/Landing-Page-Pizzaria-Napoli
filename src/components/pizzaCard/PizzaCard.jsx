import styles from "./PizzaCard.module.css";
import { ShoppingCart } from "lucide-react";

// Adicionamos 'id' aos props
function PizzaCard({ id, title, description, price, img, alt }) {
  // Verificamos se é a pizza que deve receber a animação voadora
  const isTarget = id === 2;

  return (
    <div className={styles.cardRelative}>
      {/* Adicionamos uma classe global 'js-pizza-target' se for o ID 2. 
         A opacidade inicial é 0 apenas para a pizza que sofrerá o "pouso".
      */}
      <img
        src={img}
        alt={alt}
        className={`${styles.popoutImg} ${isTarget ? "js-pizza-target" : ""}`}
        style={isTarget ? { opacity: 0 } : {}}
      />
      <div className={styles.cardVisual}>
        <div className={styles.cardBody}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.actionArea}>
            <span className={styles.price}>{price}</span>
            <button className={styles.buyBtn}>
              <ShoppingCart />
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaCard;
