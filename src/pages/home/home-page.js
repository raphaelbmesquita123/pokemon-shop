import React from 'react'
import styles from './home-page.styles.module.scss'
import logoImage from '../../imagens/pokeApiLogo.png'
import { Link } from 'react-router-dom'

export function HomePage() {
    return (
        <div className={styles.homePageContainer}>
            <img src={logoImage} alt="PokeApi" />
            <div className={styles.storeOptions}>
                <Link to="/stores/water">
                    <h1 style={{backgroundColor: 'blue'}}>WATER</h1>
                </Link>
                <Link to="/stores/fire">
                    <h1 style={{backgroundColor: 'red'}}>FIRE</h1>
                </Link>
                <Link to="/stores/grass">
                    <h1 style={{backgroundColor: 'green'}}>GRASS</h1>
                </Link>
                <Link to="/stores/rock">
                    <h1 style={{backgroundColor: 'rgb(110, 18, 18)'}}>ROCK</h1>
                </Link>
            </div>
        </div>
    )
}

export default HomePage
