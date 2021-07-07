import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { setLayer } from '../../actions/actions.js';

import styles from './NewEgg.module.css';

const NewEgg = ({ newPet, egg, setEgg }) => {
  
  const dispatch = useDispatch();
  const layer0 = useSelector((state) => state.layer0);

  // hay que agregar UseEffect para aplicar la logica dentro del componente

  // Establece el tipo de huevo segun random
  const openEgg = () => {
    // Devuelve un nro random entre 0 y 100 inclusive
    const getRandom = () => Math.floor(Math.random() * (101 - 0));

    let random = getRandom();

    if (random > 0 && random <= 30) {
      setEgg({
        type: 'common',
        img: './img/eggs/Huevo_de_mascota.png',
      });
    }

    if (random > 30 && random <= 50) {
      setEgg({
        type: 'broken',
        img: './img/eggs/Huevo_roto.png',
      });
    }

    if (random > 50 && random <= 70) {
      setEgg({
        type: 'farm',
        img: './img/eggs/Huevo_de_Granja.png',
      });
    }

    if (random > 70 && random <= 80) {
      setEgg({
        type: 'blue',
        img: './img/eggs/Huevo_azul.png',
      });
    }

    if (random > 80 && random <= 90) {
      setEgg({
        type: 'pink',
        img: './img/eggs/Huevo_rosa.png',
      });
    }

    if (random > 90 && random <= 100) {
      setEgg({
        type: 'safari',
        img: './img/eggs/Huevo_de_Safari.png',
      });
    }
  };

  useEffect(() => {
    console.log('useEffect');
  }, [layer0]);

  return layer0 === 'New Egg' ? (
    <div className={styles.box}>
      <div id={styles.titulo}>Abre tu huevo!</div>

      <div id={styles.body}>
        <input
          className="shake-slow shake-constant shake-constant--hover"
          type="image"
          alt=""
          src={egg.img}
          onClick={() => newPet()}
        />
      </div>
    </div>
  ) : null;
};

export default NewEgg;
