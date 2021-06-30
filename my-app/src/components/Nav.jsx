import React from 'react';
import title from '../img/title.png';
import styles from './Nav.module.css'

function Nav() {

    return(

        <nav id={styles.Nav}>
            <img src={title} alt=''></img>
        </nav>
    )
}

export default Nav