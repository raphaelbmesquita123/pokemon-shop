import React from 'react'
import styles from './home-page.styles.module.scss'
import logoImage from '../../imagens/pokeApiLogo.png'
import { Link } from 'react-router-dom'
import { Basket } from '../../context/basket-context'

export function HomePage() {

    const { changeStore, cleanBasket } = Basket()

    function handdleChangeStore (store) {
        changeStore(store)
        cleanBasket()
    }
 
    return (
            <div className={styles.homePageinfo}>
                <img src={logoImage} alt="PokeApi" />
                <div className={styles.storeOptions}>
                    <Link to="/stores/water" 
                    onClick={() => handdleChangeStore('water')}
                    >
                        <h1 style={{backgroundColor: 'blue'}}>WATER</h1>
                    </Link>
                    <Link to="/stores/fire" 
                    onClick={() => handdleChangeStore('fire')}
                    >
                        <h1 style={{backgroundColor: 'red'}}>FIRE</h1>
                    </Link>
                    <Link to="/stores/grass" 
                    onClick={() => handdleChangeStore('grass')}
                    >
                        <h1 style={{backgroundColor: 'green'}}>GRASS</h1>
                    </Link>
                    <Link to="/stores/rock" 
                    onClick={() => handdleChangeStore('rock')}>
                        <h1 style={{backgroundColor: 'rgb(110, 18, 18)'}}>ROCK</h1>
                    </Link>
                </div>
            </div>
    )
}

export default HomePage
