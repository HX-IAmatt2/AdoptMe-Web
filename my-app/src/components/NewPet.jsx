import React from 'react';
import styles from './NewPet.module.css';
import NameIt from './NameIt.jsx';

export default function NewPet({ window, pet, add }) {
  if (window === 'newPet') {
    return (
      <div className={styles.box}>
        <div id={styles.title}>
          <h2>Tienes un {pet.raza}!</h2>
          <h4>Nombre: {pet.name}</h4>
        </div>

        <div id={styles.img}>
          <img src={pet.img} alt=""></img>
        </div>

        <div id={styles.info}>
          <ul>
            <li>Rareza: {pet.rareza}</li>
            <li>Edad: {pet.age}</li>
            <li>
              Trucos:
              <ul id={styles.trickList}>
                {pet.trucos.map((truco) => (
                  <li> {truco} </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div id={styles.btnsDiv}>
          <button
            id={styles.btnAdd}
            className="btn btn-primary"
            onClick={() => add()}
          >
            Cambiar nombre
          </button>

          <button
            id={styles.btnAdd}
            className="btn btn-success"
            onClick={() => add()}
          >
            Guardar en inventario
          </button>
        </div>
      </div>
    );
  } else return null;
}
