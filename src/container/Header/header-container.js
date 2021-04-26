import styles from './header-container.module.scss'
import React, { useState } from 'react'

import pokeApiLogo from '../../imagens/pokeApiLogo.png'

export function HeaderContainer () {
    const [ slideStyle, setSlideStyle ] = useState({backgroundColor:'var(--red-500)', left: `0%`})

    return(
        <div className={styles.headerContainer}>
            <div>
                <i className="fas fa-chevron-left"></i>
            </div> 
            <div className={styles.changeStore}>
                <img src={pokeApiLogo} alt="pokeStoreLogo"></img>

                <div className={styles.storeButtons}>
                    <div 
                        className={styles.sliderButton} 
                        style={ slideStyle } 
                    ></div>
                    
                    <div onClick={() => setSlideStyle({backgroundColor: 'var(--red-500)', left: '0%'})}>
                        <small>Fire Store</small>
                    </div>

                    <div onClick={() => setSlideStyle({backgroundColor: 'var(--blue-500)', left: '25%'})}>
                        <small>Water Store</small>
                    </div>

                    <div onClick={() => setSlideStyle({backgroundColor: 'var(--green-500)', left: '50%'})}>
                        <small>Earth Store</small>
                    </div>

                    <div onClick={() => setSlideStyle({backgroundColor: 'var(--brown-500)', left: '75%'})}>
                        <small>Rock Store</small>
                    </div>

                </div>
                
            </div>
            <div>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
    )
}