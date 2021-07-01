import React from "react";
import { Link } from 'react-router-dom';

import styles from './NewEgg.module.css'


function NewEgg ({newPet, egg}) {
        
        return (

            <div className={styles.box}> 
                
                <div id={styles.titulo}>
                    Abre tu huevo!
                </div>

                <div id={styles.body}>
                    <Link to='/NuevaMascota'>
                        <input 
                            className="shake-slow shake-constant shake-constant--hover" 
                            type="image" 
                            alt='' 
                            src={egg.img}
                            onClick={ () => newPet()}
                        />
                    </Link>
                </div>
                
            </div>

        )
}

export default NewEgg