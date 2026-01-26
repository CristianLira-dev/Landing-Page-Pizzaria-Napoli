import Lottie from "lottie-react";
import pizzaJSON from "../../assets/images/PizzaLoader.json"; // Seu novo arquivo JSON
import styles from "./Loader.module.css";

function Loader({ loading }) {
  // Usamos uma classe de fadeOut no CSS para uma transição suave
  return (
    <div className={`${styles.overlay} ${!loading ? styles.fadeOut : ""}`}>
      <div className={styles.lottieContainer}>
        <Lottie
          animationData={pizzaJSON}
          loop={true}
          style={{ width: 300, height: 300 }}
        />
        <p className={styles.text}>Terminando de Assar a Pizza...</p>
      </div>
    </div>
  );
}

export default Loader;
