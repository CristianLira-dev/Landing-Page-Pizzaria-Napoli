import React from 'react';
import IngredientesFlutuando from './IngredientesFlutuando';
import styles from './ListaIngredientes.module.css';
import dadosIngredientes from '../../assets/JSON/ingredientes';

function ListaIngredientes() {
  if (!dadosIngredientes || dadosIngredientes.length === 0) {
    return null;
  }

  return (
    <div className={styles.containerLista}>
      {dadosIngredientes.map((item) => (
        <IngredientesFlutuando
          key={item.id}
          src={item.src}
          alt={item.alt}
          size={item.size}
          position={item.position}
          animationDelay={item.animationDelay}
        />
      ))}
    </div>
  );
};

export default ListaIngredientes;