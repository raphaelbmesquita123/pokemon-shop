import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import pokeApiLogo from '../../imagens/pokeApiLogo.png'
import styles from './header-container.module.scss'

export function HeaderContainer () {

    let history = useHistory();
    const goToPreviousPath = () => {
        history.goBack()
    }

    return(
        <div className={styles.headerContainer}>
            <div>
                <button className={styles.headerButton} onClick={goToPreviousPath}>
                    <i className="fas fa-chevron-left fa-lg"></i>
                </button>
            </div> 
            <div className={styles.pokeStoreLogo}>
                <img src={pokeApiLogo} alt="pokeStoreLogo"></img>                
            </div>
            <div>
                <Link to='/Basket'>
                    <i className={`fas fa-shopping-cart ${styles.iconButton}`}></i>
                </Link>
            </div>
        </div>
    )
}