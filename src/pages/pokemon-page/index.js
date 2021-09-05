import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//styles
import styles from './styles.module.scss'

//utils
import { formatPrice } from '../../utils/formatedPrice'

//service
import { api } from '../../Service/axios'

//context
import { Basket } from '../../context/basket-context'

export function PokemonPage() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState([])
  const { basketAddItem } = Basket()
  console.log(id)
  useEffect(() => {
    api.get(`/pokemon/${id}`).then((response) => {
      setPokemon({
        ...response.data,
        name: response.data.name,
        price: response.data.id * 5,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.data.id}.png`,
      })
    })
  }, [id])

  function handdleAddPokemonToBasket(pokemonId) {
    basketAddItem(pokemonId)
  }

  return (
    <div className={styles.pokemonPage}>
      <div className={styles.pokemonCard}>
        <div>
          <img src={pokemon.img} alt={pokemon.name} />
        </div>

        <div>
          <div className={styles.pokemonDetails}>
            <h2>{pokemon.name}</h2>
            <h3>Exp {pokemon.base_experience}</h3>
            <h3>Weight: {pokemon.weight}kg</h3>

            <h3>Price: {formatPrice(pokemon.price)}</h3>
            <i
              className={`fas fa-shopping-cart ${styles.basket}`}
              onClick={() => handdleAddPokemonToBasket(pokemon.id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}
