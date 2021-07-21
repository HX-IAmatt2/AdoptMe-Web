import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import NewEgg from './components/NewEgg/NewEgg';
import Inventario from './components/Inventario/Inventario';
import { setLayer } from './actions/actions.js';

const App = () => {
  const dispatch = useDispatch();
  const [egg, setEgg] = useState({});

  // Da un huevo de bienvenida de regalo por única vez.
  useEffect(() => {
    getEgg('Inicial');
  }, []);

  // Devuelve un nro random entre 0 y 100 inclusive
  const getRandom = () => Math.floor(Math.random() * (101 - 1));

  // Establece el tipo de huevo
  const getEgg = async (egg) => {
    let fetchEgg = '';

    if (egg === 'Inicial') fetchEgg = egg;
    else {
      const random = Math.floor(getRandom());
      if (random > 0 && random <= 30) fetchEgg = 'Roto';
      if (random > 20 && random <= 50) fetchEgg = 'Comun';
      if (random > 50 && random <= 60) fetchEgg = 'Granja';
      if (random > 60 && random <= 70) fetchEgg = 'Selva';
      if (random > 70 && random <= 80) fetchEgg = 'Azul';
      if (random > 80 && random <= 90) fetchEgg = 'Rosa';
      if (random > 90 && random <= 100) fetchEgg = 'Safari';
      console.log(`numero obtenido: ${random} (huevo ${fetchEgg})`);
    }
    try {
      let response = await fetch('http://localhost:3001/eggs/' + fetchEgg);
      setEgg(await response.json());
    } catch (error) {
      console.log('Error en Fetch:', error);
    }

    dispatch(setLayer(0, 'New Egg'));
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

/*    fetch('http://localhost:3001/eggs/' + fetchEgg)
     .then((response) => response.json())
     .then((recurso) => setEgg(recurso))
     .catch((error) => console.log('Error en Fetch:', error)); */
