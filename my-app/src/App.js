import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import NewEgg from './components/NewEgg';
import NewPet from './components/NewPet';
import Inventario from './components/Inventario';


function App() {

  const [window, setWindow] = useState('');
  const [pet, setPet] = useState('');
  const [egg, setEgg] = useState('');
  const [inventario, setInventario] = useState([]);


  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  function typeOfEgg() {
  let random = Math.floor(getRandom(1,100))
  if (random>0 && random<=40) setEgg('./img/eggs/Huevo_de_mascota.png')
  if (random>40 && random<=80) setEgg('./img/eggs/Huevo_roto.png')
  if (random>80 && random<=90) setEgg('./img/eggs/Huevo_azul.png')
  if (random>90 && random<=100) setEgg('./img/eggs/Huevo_rosa.png')
  }

  function close() {
    setWindow('blank')
  }

  function add() {
    setInventario([...inventario, pet])
    close()
  }

  function newPet() {
    setWindow('newPet')
    setPet({
      raza: 'Gato',
      name:'Gato',
      img: './img/pets/Gato.png',
      edad: 'Recién nacido',
      rareza:'Común',
      trucos: ['Sentarse (Recien Nacido)',
        'Acostarse (Junior)',
        'Rebotar (Preadolecente)',
        'Voltereta (Adolecente)',
        'Backflip (Adulto Joven)',
        'Baile (Crecido Completamente)']
    })
  }

  return (

    <div className="App">

      <Nav />

      <div>
        <button 
          type="submit" 
          className='btn btn-primary'
          onClick={(e) => {
            e.preventDefault()
            typeOfEgg()
            setWindow('egg')
          }}>Adoptar
        </button>

        <button 
          className='btn btn-info' 
          onClick={() => setWindow('inventario')}
          >Inventario
        </button>
      </div>
      
      <NewEgg window={window} newPet={newPet} egg={egg}/>
      <NewPet window={window} pet={pet} add={add} inventario={inventario}/>
      <Inventario window={window} close={close} inventario={inventario} />
    </div>
  );
}

export default App;
