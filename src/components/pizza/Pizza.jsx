import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../pizza/Pizza.module.css";
import PizzaMarguerita from "../../assets/images/pizza-peperoni.png";

gsap.registerPlugin(ScrollTrigger);

function Pizza() {
  const pizzaRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Cria o MatchMedia
    let mm = gsap.matchMedia();
    
    // Variável para guardar o contexto e limpar depois
    let ctx;

    // --- CONFIGURAÇÃO PARA DESKTOP E TABLET (Acima de 769px) ---
    // O código dentro deste bloco NÃO roda no celular
    mm.add("(min-width: 991px)", () => {
      
      ctx = gsap.context(() => {
        // 1. Estado Inicial
        gsap.set(pizzaRef.current, {
          y: "40vh", // Posição inicial visual
          x: "0",
          rotate: 0,
          scale: 1,
        });

        // 2. Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: "#SectionHero",
            start: "top top",
            endTrigger: "#SectionCards",
            end: "center center",
            scrub: 1, 
          },
        });

        /* --- CÁLCULOS RESPONSIVOS --- */
        // Aqui definimos valores diferentes dependendo da largura da tela
        const isWideScreen = window.innerWidth > 1400; // Telas Grandes (Full HD+)
        const isTablet = window.innerWidth < 1024;     // Tablets
        
        // ETAPA 1: Movimento lateral (ao lado do texto)
        tl.to(pizzaRef.current, {
          // Se for tela grande, move menos. Se for tablet, move mais.
          x: isWideScreen ? "-20vw" : (isTablet ? "-25vw" : "-20vw"), 
          
          y: "-5vh", 
          scale: 0.7, 
          rotation: 120, 
          duration: 1, 
        });

        // ETAPA 2: Aterrissagem no Card
        tl.to(pizzaRef.current, {
          // AJUSTE FINO VERTICAL:
          // Se a pizza não estiver caindo em cima do card, mude estes valores:
          // Telas Grandes: tente -45vh | Notebooks: tente -40vh
          y: isWideScreen ? "-30vh" : "-42vh", 
          x: "0vw", 
          // O tamanho final tem que bater com o tamanho da imagem do card
          scale: isTablet ? 0.20 : 0.27, 
          
          rotation: 360, 
          duration: 1, 
        });

      }, containerRef);
    });

    // Cleanup: Remove tudo quando o componente desmonta
    return () => mm.revert(); 
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