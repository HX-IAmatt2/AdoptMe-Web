import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route } from 'react-router-dom';

import { setLayer } from './actions/actions.js';

import Nav from './components/Nav/Nav.jsx';
import NewEgg from './components/NewEgg/NewEgg';
import NewPet from './components/NewPet/NewPet';
import Inventario from './components/Inventario/Inventario';

import { Inicial } from './data/eggs.js';


const App = () => {
  const dispatch = useDispatch();
  const [egg, setEgg] = useState({});

  // Devuelve un nro random entre 0 y 100 inclusive
  const getRandom = () => Math.floor(Math.random() * (101 - 0));

  /*  // Establece el tipo de huevo segun random
  const typeOfEgg = () => {
    let random = Math.floor(getRandom());

    if (random > 0 && random <= 30) setEgg(Comun);
    if (random > 30 && random <= 50) setEgg(Roto);
    if (random > 50 && random <= 70) setEgg(Granja);
    if (random > 70 && random <= 80) setEgg(Azul);
    if (random > 80 && random <= 90) setEgg(Rosa);
    if (random > 90 && random <= 100) setEgg(Safari);

    dispatch(setLayer(0, 'New Egg'));
  }; */

  // Obtiene una nueva mascota segun el huevo
  // Falta completar. Farm esta listo, ya tiene todos sus pets.
  /* const newPet = () => {
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

    dispatch(setLayer(0, 'New Pet'));
  }; */

  // Da un huevo de bienvenida de regalo por única vez.
/*   useEffect(() => {
    setEgg(Inicial);
    dispatch(setLayer(0, 'New Egg'));
  }, []); */

  return (
    <div className="App">
      <Route path="/">
        <Nav  />
      </Route>
      
      <NewEgg/>

      <Route path="/Inventario">
        <Inventario />
      </Route>
    </div>
  );
};

export default App;
