import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import { setLayer } from './actions/actions.js';

import Nav from './components/Nav/Nav.jsx';
import NewEgg from './components/NewEgg/NewEgg';
import NewPet from './components/NewPet/NewPet';
import Inventario from './components/Inventario/Inventario';

import { Gato, Perro, PerroAzul, GatoRosa } from './pets.js';
import { Elefante} from './pets/safari.js'
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
} from './pets/farm.js'; // No hay Api de AdoptMe, traigo de aca las pets

const App = () => {

  const dispatch = useDispatch();
  const [egg, setEgg] = useState({});
  const [pet, setPet] = useState({});

  // Devuelve un nro random entre 0 y 100 inclusive
  const getRandom = () => Math.floor(Math.random() * (101 - 0));

  // Establece el tipo de huevo segun random
  function typeOfEgg() {

    let random = Math.floor(getRandom(1, 101));

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

    console.log(random)
    dispatch(setLayer(0, 'New Egg'));
  }

  // Obtiene una nueva mascota segun el huevo
  function newPet() {
    // Falta terminar de desarrollar. Farm esta listo, ya tiene todos sus pets.

    if (egg.type === 'common') setPet(Gato);

    if (egg.type === 'broken') setPet(Perro);

    if (egg.type === 'farm') {
      let random = getRandom(1, 101);
      if (random > 0 && random <= 20) setPet(Pollo); // Comunes 20%
      if (random > 20 && random <= 37.5) setPet(PatoTonto);
      if (random > 37.5 && random <= 55) setPet(Pato); // No comunes 35 %
      if (random > 55 && random <= 68.5) setPet(Cerdo);
      if (random > 68.5 && random <= 82) setPet(Vaca); // Raros 27%
      if (random > 82 && random <= 89.5) setPet(Pavo);
      if (random > 89.5 && random <= 97) setPet(Llama); // Ultra Raros 15%
      if (random > 97 && random <= 98.5) setPet(Buho);
      if (random > 98.5 && random <= 100) setPet(Cuervo); // Legendarios 3 %
    }

    if (egg.type === 'blue') setPet(PerroAzul);

    if (egg.type === 'pink') setPet(GatoRosa);

    if (egg.type === 'safari') setPet(Elefante);

    dispatch(setLayer(0, 'New Pet'));
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav typeOfEgg={typeOfEgg} />} />

      <NewEgg newPet={newPet} egg={egg} />

      <NewPet pet={pet} setPet={setPet} />

      <Route path="/Inventario" render={() => <Inventario />} />
    </div>
  );
}

export default App
