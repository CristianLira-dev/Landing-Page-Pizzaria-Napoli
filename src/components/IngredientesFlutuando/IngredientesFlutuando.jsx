import React from 'react';
import styles from './IngredientesFlutuando.module.css';

function IngredientesFlutuando ({ src, alt, size, position, animationDelay }) {
  
  const style = {
    top: position?.top,
    left: position?.left,
    right: position?.right,
    bottom: position?.bottom,
    width: size,
    animationDelay: animationDelay,
  };

  return (
    <div className={styles.wrapper} style={style}>
      <img 
        src={src} 
        alt={alt || ""} // Acessibilidade: vazio se não informado
        className={styles.img}
        loading="lazy"
        draggable="false" // UX: Evita que o usuário arraste a imagem "fantasma"
      />
    </div>
  );
};

export default IngredientesFlutuando;