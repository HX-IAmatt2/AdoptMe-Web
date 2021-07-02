import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Nav from './components/Nav.jsx';
import NewEgg from './components/NewEgg';
import NewPet from './components/NewPet';
import Inventario from './components/Inventario';

import { Gato, Perro, PerroAzul, GatoRosa } from './pets.js';
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
} from './pets/farm.js'; // No hay Api de esto, traigo de aca las pets

function App() {
  const [egg, setEgg] = useState({});
  const [pet, setPet] = useState({});
  const [inventario, setInventario] = useState([]);
  const [window, setWindow] = useState('');

  // Devuelve un nro random entre dos valores
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Establece el tipo de huevo segun random
  function typeOfEgg() {
    let random = Math.floor(getRandom(1, 100));

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
  }

  // Añade la mascota obtenida al inventario
  function add() {
    setInventario([...inventario, pet]);
  }

  return (
    <div className="App">
      <Route path="/" render={() => <Nav typeOfEgg={typeOfEgg} />} />

      <Route
        path="/NuevoHuevo"
        render={() => <NewEgg newPet={newPet} egg={egg} />}
      />
      <Route
        path="/NuevaMascota"
        render={() => (
          <NewPet
            pet={pet}
            setPet={setPet}
            inventario={inventario}
            add={add}
            window={window}
            setWindow={setWindow}
          />
        )}
      />

      <Route
        path="/Inventario"
        render={() => <Inventario inventario={inventario} />}
      />
    </div>
  );
}

export default App;
