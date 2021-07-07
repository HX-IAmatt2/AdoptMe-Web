import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { addPet, setLayer } from '../../actions/actions.js';

import Rename from '../Rename/Rename.jsx';
import styles from './NewPet.module.css';


const NewPet = ({ pet, setPet }) => {
  const layer0 = useSelector((state) => state.layer0);
  const dispatch = useDispatch();


  // Añade la mascota obtenida al inventario
  const add = () => {
    dispatch(addPet(pet));
    dispatch(setLayer(0, ''));
  };

  if (layer0 === 'New Pet') {
    return (
      <div className={styles.box}>
        <div id={styles.header}>
          <h2>Obtuviste {pet.description}!</h2>
        </div>
        <div id={styles.img}>
          <img src={pet.img} alt=""></img>
        </div>

        <Rename pet={pet} setPet={setPet} />

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
            onClick={() => dispatch(setLayer(1, 'Rename'))}
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
};

export default NewPet;
