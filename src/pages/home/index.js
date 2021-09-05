import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../../imagens/pokeApiLogo.png'

//styles
import styles from './styles.module.scss'

export function HomePage() {
  return (
    <div className={styles.homePageinfo}>
      <img src={logoImage} alt='PokeApi' />
      <div className={styles.storeOptions}>
        <Link to='/stores/water'>
          <h1 style={{ backgroundColor: 'blue' }}>WATER</h1>
        </Link>
        <Link to='/stores/fire'>
          <h1 style={{ backgroundColor: 'red' }}>FIRE</h1>
        </Link>
        <Link to='/stores/grass'>
          <h1 style={{ backgroundColor: 'green' }}>GRASS</h1>
        </Link>
        <Link to='/stores/rock'>
          <h1 style={{ backgroundColor: 'rgb(110, 18, 18)' }}>ROCK</h1>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
