import React from "react";
import styles from './NewEgg.module.css'


function NewEgg ({window, newPet, egg}) {
        
    if (window==='egg') {

        return (

            <div className={styles.box}> 
                
                <div id={styles.titulo}>
                    Abre tu huevo!
                </div>

                <div id={styles.body}>
                    <input 
                        className="shake-slow shake-constant shake-constant--hover" 
                        type="image" 
                        alt='' 
                        src={egg.img}
                        onClick={ () => newPet()}
                    />
                </div>
                
            </div>

        )
    }
    else return null
}

export default NewEgg