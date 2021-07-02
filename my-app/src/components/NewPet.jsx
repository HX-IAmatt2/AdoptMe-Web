import React from 'react';
import { Link } from 'react-router-dom';
import Rename from './Rename.jsx';

import styles from './NewPet.module.css';

export default function NewPet({ pet, setPet, window, setWindow, inventario, setInventario }) {

  // Añade la mascota obtenida al inventario
  function add() {
    setInventario([...inventario, pet]);
    setWindow({ ...window, main: '' });
  }

  if (window.main === 'NewPet') {
    return (
      <div className={styles.box}>
        <div id={styles.header}>
          <h2>Obtuviste {pet.description}!</h2>
        </div>
        <div id={styles.img}>
          <img src={pet.img} alt=""></img>
        
        </div>

        <Rename
          pet={pet}
          setPet={setPet}
          window={window}
          setWindow={setWindow}
        />

        <div id={styles.info}>
          <ul>
            <li key="name">Nombre: {pet.name}</li>
            <li key="type">Rareza: {pet.rareza}</li>
            <li key="age">Edad: {pet.age}</li>
            <li key="tricks">
              Trucos:
              <ul id={styles.trickList}>
                {pet.trucos.map((truco, i) => (
                  <li key={i}> {truco} </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div id={styles.btnsDiv}>
          <button
            className="btn btn-primary"
            onClick={() => setWindow({ ...window, popup: 'Rename' })}
          >
            Cambiar nombre
          </button>
          <Link to="/Inventario">
            <button className="btn btn-success" onClick={() => add()}>
              Guardar en inventario
            </button>
          </Link>
        </div>
      </div>
    );
  } else return null;
}
