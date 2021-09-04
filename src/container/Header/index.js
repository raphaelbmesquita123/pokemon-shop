import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import pokeApiLogo from '../../imagens/pokeApiLogo.png'

//styles
import styles from './styles.module.scss'

//context
import { Basket } from '../../context/basket-context'

export function HeaderContainer() {
  const { basket } = Basket()

  const totalItensOnBasket = basket.reduce((totalItens, pokemon) => {
    return (totalItens += pokemon.qty)
  }, 0)

  let history = useHistory()
  const goToPreviousPath = () => {
    history.goBack()
  }

  return (
    <div className={styles.headerContainer}>
      <div>
        <button className={styles.headerButton} onClick={goToPreviousPath}>
          <i className='fas fa-chevron-left fa-lg'></i>
        </button>
      </div>
      <div className={styles.pokeStoreLogo}>
        <img src={pokeApiLogo} alt='pokeStoreLogo'></img>
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
