import React from 'react';
import styles from './NewPet.module.css';


export default function NewPet({window, pet, add}) {

    if (window==='newPet') {

        return (

            <div className={styles.box}>
 
                <div>
                    <h2>Tienes un {pet.raza}!</h2>
                </div>
                <div>
                    <img src={pet.img} alt=''></img>
                </div>
                <div>
                    <ul>
                        <li>Rareza: {pet.rareza}</li>
                        <li>Edad: {pet.edad}</li>
                        <li>Trucos: {pet.trucos}</li>
                    </ul>
                </div>

                <div id={styles.addDiv}>
                    <button 
                        id={styles.btnAdd} 
                        className='btn btn-primary'
                        onClick={() => add()}
                    >
                        Guardar en inventario
                    </button>
                </div>
            </div>

        )
    }
    else return null
}