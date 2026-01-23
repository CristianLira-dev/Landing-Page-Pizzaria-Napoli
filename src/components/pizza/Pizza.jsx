import { useLayoutEffect, useRef } from "react"; // 1. Importamos os Hooks necessários
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../pizza/Pizza.module.css";
import PizzaMarguerita from "../../assets/images/pizza.png";

// 2. Registramos o plugin fora do componente
gsap.registerPlugin(ScrollTrigger);

function Pizza() {
  // 3. Criamos as referências para manipular os elementos do DOM
  const pizzaRef = useRef(null);
  const containerRef = useRef(null);


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Estado Inicial (Centralizada na Hero)
      gsap.set(pizzaRef.current, {
        y: "30vh",
        x: "0",
        rotate: 0,
        scale: 1,
      });

      // 2. Criamos uma TIMELINE (Linha do tempo sequencial)
      // Ela conecta o scroll desde o topo até a seção de Cards
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#SectionHero", // Começa na Hero
          start: "top top",
          endTrigger: "#SectionCards", // TERMINA NA SEÇÃO DE CARDS (Verifique se o ID no App.jsx é esse mesmo!)
          end: "center center", // A animação acaba quando o meio dos cards estiver no meio da tela
          scrub: 3, // Suavidade
        },
      });

      // --- ETAPA 1: Da Hero para o lado do texto ("O Segredo...") ---
      tl.to(pizzaRef.current, {
        y: "10vh", // Desce um pouco
        x: "-20vw", // Vai para a DIREITA (Use -30vw se quiser Esquerda)
        scale: 0.85, // Diminui um pouco
        rotation: 120, // Gira parcial
        duration: 1, // Duração proporcional ao scroll (peso 1)
      });

      // --- ETAPA 2: Do texto para o meio dos Cards ---
      tl.to(pizzaRef.current, {
        y: "-23vh", // Ajuste fino da altura final
        x: "0vw", // Volta para o CENTRO
        scale: 0.34, // Diminui mais (como você pediu)
        rotation: 360, // Completa o giro
        duration: 1, // Peso 1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div ref={containerRef} className={styles.pizzaContainer}>
      <img
        ref={pizzaRef}
        src={PizzaMarguerita}
        alt="Pizza Artesanal"
        className={styles.pizzaImage}
      />
    </div>
  );
}

export default Pizza;
