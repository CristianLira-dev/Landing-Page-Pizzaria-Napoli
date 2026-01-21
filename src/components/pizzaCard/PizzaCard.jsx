import styles from "./PizzaCard.module.css";
import { ShoppingCart } from "lucide-react";


function PizzaCard({ title, description, price, img, alt, key }) {
  return (
    <div key={key} className={styles.cardRelative}>
      <img src={img} alt={alt} className={styles.popoutImg} />
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
