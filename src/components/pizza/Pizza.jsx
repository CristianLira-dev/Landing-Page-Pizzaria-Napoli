import styles from '../pizza/Pizza.module.css'
import PizzaMarguerita from "../../assets/images/pizza.png"
function Pizza() {
    return (
      <div className={styles.pizzaContainer}>
        <img
          src={PizzaMarguerita}
          alt="Pizza Artesanal"
          className={styles.pizzaImage}
        />
      </div>
    );
}

export default Pizza;