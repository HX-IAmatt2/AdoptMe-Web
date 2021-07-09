import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { addPet, setLayer } from '../../actions/actions.js';
import { Gato, Perro, PerroAzul, GatoRosa } from '../../data/pets/pets.js';
import { Elefante } from '../../data/pets/safari.js';
import {
  Vaca,
  Pollo,
  PatoTonto,
  Pato,
  Cerdo,
  Pavo,
  Llama,
  Buho,
  Cuervo,
} from '../../data/pets/farm.js'; // No hay Api de AdoptMe, traigo de aca las pets
import NewPetView from './NewPetView.jsx';

const NewPet = ({ egg, pet, setPet }) => {
  const dispatch = useDispatch();
  //const [pet, setPet] = useState({});


  const getRandom = () => Math.floor(Math.random() * (101 - 0));


/* useEffect (() => {

  let random = Math.floor(getRandom());

    switch (egg.type) {
      case 'initial':
        if (random > 0 && random <= 50) setPet(Gato);
        if (random > 50 && random <= 101) setPet(Perro);
        break;
      case 'common':
        setPet(Gato);
        break;
      case 'broken':
        setPet(Perro);
        break;
      case 'farm':
        if (random > 0 && random <= 20) setPet(Pollo); // Comunes 20%
        if (random > 20 && random <= 37.5) setPet(PatoTonto);
        if (random > 37.5 && random <= 55) setPet(Pato); // No comunes 35 %
        if (random > 55 && random <= 68.5) setPet(Cerdo);
        if (random > 68.5 && random <= 82) setPet(Vaca); // Raros 27%
        if (random > 82 && random <= 89.5) setPet(Pavo);
        if (random > 89.5 && random <= 97) setPet(Llama); // Ultra Raros 15%
        if (random > 97 && random <= 98.5) setPet(Buho);
        if (random > 98.5 && random <= 100) setPet(Cuervo); // Legendarios 3 %
        break;
      case 'blue':
        setPet(PerroAzul);
        break;
      case 'pink':
        setPet(GatoRosa);
        break;
      case 'safari':
        setPet(Elefante);
        break;
      default:
        break;
    }

},[]) */


  // Añade la mascota obtenida al inventario
  const add = () => {
    dispatch(addPet(pet));
    dispatch(setLayer(0, ''));
  };

  // Renderiza Rename
  const rename = () => {
    dispatch(setLayer(1, 'Rename'));
  };

  console.log(pet)

  return (
  
  <NewPetView pet={pet} setPet={setPet} add={add} rename={rename} />
)
};

export default NewPet;


