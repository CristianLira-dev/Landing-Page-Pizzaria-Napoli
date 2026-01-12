import styles from '../pizza/Pizza.module.css'
import Marguerita from "../../assets/images/marguerita.png"
function Pizza() {
    return (
      <div className={styles.pizzaContainer}>
        <img
          src={Marguerita}
          alt="Pizza Artesanal"
          className={styles.pizzaImage}
        />
      </div>
    );
}

export default Pizza;