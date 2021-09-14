import React from 'react'
import { Link } from 'react-router-dom'
import pokeApiLogo from '../../imagens/pokeApiLogo.png'

//styles
import styles from './styles.module.scss'

//context
import { Basket } from '../../context/basket-context'

export function HeaderContainer() {
  const { basket, store } = Basket()

  const totalItensOnBasket = basket.reduce((totalItens, pokemon) => {
    return (totalItens += pokemon.qty)
  }, 0)

  return (
    <div className={styles.headerContainer}>
      <div>
        <Link to='/'className={styles.headerButton} >
          <i className='fas fa-chevron-left fa-lg'></i>
        </Link>
      </div>
      <div className={styles.pokeStoreLogo}>
        <Link to={`/stores/${store}`}>
          <img src={pokeApiLogo} alt='pokeStoreLogo'></img>
        </Link>
      </div>
      <div className={styles.totalItensBasket}>
        <span>{totalItensOnBasket}</span>
        <Link to='/basket'>
          <i className={`fas fa-shopping-cart ${styles.iconButton}`}></i>
        </Link>
      </div>
    </div>
  )
}
