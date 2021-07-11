import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import NewEgg from './components/NewEgg/NewEgg';
import Inventario from './components/Inventario/Inventario';
import { setLayer } from './actions/actions.js';

import {
  Inicial,
  Comun,
  Roto,
  Granja,
  Azul,
  Rosa,
  Safari,
  Selva,
} from './data/eggs.js';

const App = () => {
  const dispatch = useDispatch();
  const [egg, setEgg] = useState({});

  // Da un huevo de bienvenida de regalo por única vez.
  useEffect(() => {
    setEgg(Inicial);
    dispatch(setLayer(0, 'New Egg'));
  }, []);

  // Devuelve un nro random entre 0 y 100 inclusive
  const getRandom = () => Math.floor(Math.random() * (101 - 1));

  // Establece el tipo de huevo segun random
  const getEgg = () => {
    let random = Math.floor(getRandom());
    if (random > 0 && random <= 30) setEgg(Roto);
    if (random > 20 && random <= 50) setEgg(Comun);
    if (random > 50 && random <= 60) setEgg(Granja);
    if (random > 60 && random <= 70) setEgg(Selva);
    if (random > 70 && random <= 80) setEgg(Azul);
    if (random > 80 && random <= 90) setEgg(Rosa);
    if (random > 90 && random <= 100) setEgg(Safari);
    dispatch(setLayer(0, 'New Egg'));
    console.log('numero obtenido:', random);
  };

  return (
    <div className="App">
      <Route path="/">
        <Nav getEgg={getEgg} />
      </Route>

      <NewEgg egg={egg} />

      <Route path="/Inventario">
        <Inventario />
      </Route>
    </div>
  );
};

export default App;
