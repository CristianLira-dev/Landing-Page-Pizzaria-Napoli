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
    let MEDIA_GSAP = gsap.matchMedia();

    MEDIA_GSAP.add(
      {
        isDesktop: "(min-width: 1240px)",
        isTablet: "(min-width: 401px) and (max-width: 1240px)",
        isSmallMobile: "(max-width: 400px)",
      },
      (context) => {
        let { isDesktop, isTablet, isSmallMobile } = context.conditions;

        if (isDesktop) {
          // --- 1. DEFINIÇÃO DE VARIÁVEIS DE AJUSTE (CÁLCULO DE POSIÇÃO) ---
          let finalY, finalScale, finalX;
          const width = window.innerWidth;

          // Refinamento de posicionamento baseado no tamanho do monitor
          if (width > 1600) {
            finalY = "-30vh";
            finalScale = 0.25;
            finalX = "0vw";
          } else if (width > 1366) {
            finalY = "-38vh";
            finalScale = 0.27;
            finalX = "0vw";
          } else {
            finalY = "-45vh";
            finalScale = 0.3;
            finalX = "1vw";
          }

          // --- 2. ESTADO INICIAL ---
          // Resetamos opacidade e posição inicial sempre que a media query desktop ativar
          gsap.set(pizzaRef.current, {
            y: "40vh",
            x: "0",
            rotate: 0,
            scale: 1,
            opacity: 1,
          });

          // --- 3. TIMELINE PRINCIPAL (O CAMINHO DA PIZZA) ---
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#SectionHero",
              start: "top top",
              endTrigger: "#SectionCards",
              end: "center center",
              scrub: 1.5, // Efeito suave de acompanhamento do scroll
              invalidateOnRefresh: true,
            },
          });

          // ETAPA 1: MOVIMENTO PARA A ESQUERDA (Limpa o caminho para os textos)
          tl.to(pizzaRef.current, {
            x: "-20vw", // Desvio lateral maior para evitar o H2
            y: "-5vh",
            scale: 0.6,
            rotation: 120,
            duration: 1,
          })

            // ETAPA 2: ATERRISSAGEM E HANDOVER (Sincronizado com o ID 2)
            // Usamos a label "pouso" para disparar o fade-out e fade-in simultaneamente
            .to(
              pizzaRef.current,
              {
                y: finalY,
                x: finalX,
                scale: finalScale,
                rotation: 360,
                opacity: 0, // A pizza animada desaparece ao chegar no destino
                duration: 1.5,
                ease: "power2.out",
              },
              "pouso",
            )

            .to(
              ".js-pizza-target",
              {
                opacity: 1, // A pizza estática (Marguerita ID 2) aparece
                duration: 0.1,
              },
              "pouso+=0.1",
            ); // Ajuste fino para aparecer no final do movimento
        }

        // --- 4. LÓGICA MOBILE/TABLET (Giro no lugar) ---
        if (!isDesktop) {
          gsap.set(pizzaRef.current, {
            x: 0,
            y: isTablet ? "25vh" : "45vh",
            scale: 0.9,
            rotate: 0,
            opacity: 1,
          });

          gsap.to(pizzaRef.current, {
            rotation: 360,
            ease: "none",
            scrollTrigger: {
              trigger: "#SectionHero",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          });
        }
      },
    );

    return () => MEDIA_GSAP.revert();
  }, []);

  return (
    <div ref={containerRef} className={styles.pizzaContainer}>
      <img
        ref={pizzaRef}
        src={PizzaMarguerita}
        alt="Pizza voadora de Pepperoni"
        className={styles.pizzaImage}
      />
    </div>
  );
}

export default Pizza;