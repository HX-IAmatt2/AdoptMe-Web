import React from 'react';
import styles from './Inventario.module.css'

export default function Inventario({window, inventario, close}) {

    if (window==='inventario') {
        console.log('Contenido del Inventario:',inventario)
        return (

            <div className={styles.box}>

                <div id={styles.closeDiv}>
                    <button 
                        id={styles.btnClose} 
                        className='btn btn-danger'
                        onClick={() => close()}
                    >
                        X
                    </button>
                </div>
                <div>
                
                    {
                        inventario.map(pet => (
                            <img src={pet.img} alt=''></img>
                        )  
                        
                        )
                    }
                </div>
            </div>

        )

    }
    else return null
}