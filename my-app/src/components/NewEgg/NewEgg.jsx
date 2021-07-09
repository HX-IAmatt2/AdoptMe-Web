import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NewEggView from './NewEggView.jsx';
import { setLayer } from '../../actions/actions.js';

import { Comun, Roto, Granja, Azul, Rosa, Safari } from '../../data/eggs.js';
import { Gato, Perro, PerroAzul, GatoRosa } from '../../data/pets/pets.js';
import { Elefante } from '../../data/pets/safari.js';
import NewPet from '../NewPet/NewPet.jsx';
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


const NewEgg = () => {
  const dispatch = useDispatch();
  const [egg, setEgg] = useState({});
  const [pet, setPet] = useState({});


  // Devuelve un nro random entre 0 y 100 inclusive
  const getRandom = () => Math.floor(Math.random() * (101 - 0));

  // Establece el tipo de huevo segun random
  useEffect(() => {
    let random = Math.floor(getRandom());

    if (random > 0 && random <= 30) setEgg(Comun);
    if (random > 30 && random <= 50) setEgg(Roto);
    if (random > 50 && random <= 70) setEgg(Granja);
    if (random > 70 && random <= 80) setEgg(Azul);
    if (random > 80 && random <= 90) setEgg(Rosa);
    if (random > 90 && random <= 100) setEgg(Safari);
  });

  // Create

  const newPet = () => {

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
    dispatch(setLayer(0, 'New Pet'))
  }
    
  return ( 
    <>
    <NewEggView egg={egg} newPet={newPet}/>
    <NewPet pet={pet} setPet={setPet}/>
    </>
    )
};

export default NewEgg;


