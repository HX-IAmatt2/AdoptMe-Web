import React from 'react';

import { useSelector} from 'react-redux';

import styles from './NewEgg.module.css';

export default function NewEgg({ newPet, egg }) {

  
// hay que agregar UseEffect para aplicar la logica dentro del modulo


  const layer0 = useSelector((state) => state.layer0);
/* 
    // Devuelve un nro random entre dos valores
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

      // Establece el tipo de huevo segun random
    function typeOfEgg() {
    let random = getRandom(1, 100);

    if (random > 0 && random <= 40) {
      setEgg({
        type: 'common',
        img: './img/eggs/Huevo_de_mascota.png',
      });
    }

    if (random > 40 && random <= 60) {
      setEgg({
        type: 'broken',
        img: './img/eggs/Huevo_roto.png',
      });
    }

    if (random > 60 && random <= 80) {
      setEgg({
        type: 'farm',
        img: './img/eggs/Huevo_de_Granja.png',
      });
    }

    if (random > 80 && random <= 90) {
      setEgg({
        type: 'blue',
        img: './img/eggs/Huevo_azul.png',
      });
    }

    if (random > 90 && random <= 100) {
      setEgg({
        type: 'pink',
        img: './img/eggs/Huevo_rosa.png',
      });
    }

    dispatch(setLayer(0,'New Egg'))
    }
 */

  if (layer0 === 'New Egg') {
    return (
      <div className={styles.box}>
        <div id={styles.titulo}>Abre tu huevo!</div>

        <div id={styles.body}>
          <input
            className="shake-slow shake-constant shake-constant--hover"
            type="image"
            alt=""
            v
            src={egg.img}
            onClick={() => newPet()}
          />
        </div>
      </div>
    );
  } else return null;
}
