import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//componengt
import { PokemonCard } from '../../components/card'

//services
import { api } from '../../Service/axios'

//styles
import styles from './styles.module.scss'

//context
import { Basket } from '../../context/basket-context'

export function Stores() {
  const [isLoading, setIsLoading] = useState(true)
  const [searchedPokemons, setSearchedPokemons] = useState([])
  const [pokemons, setPokemons] = useState([])

  const { changeStore } = Basket()
  const { type } = useParams()

  useEffect(() => {
    try {
      if (type) {
        async function fethPokemons() {
          const { data } = await api.get(`type/${type}`)
          const allPokemons = data.pokemon
          const pokemonData = allPokemons.map((pokemon) => {
            const pokemonUrl = pokemon.pokemon.url.split('/')
            const pokemonId = Number(pokemonUrl[6])
            return {
              ...pokemon,
              id: pokemonId,
              name: pokemon.pokemon.name,
              price: pokemonId * 5,
              img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
              type: type,
            }
          })
          setIsLoading(false)
          setPokemons(pokemonData)
          setSearchedPokemons(pokemonData)
        }

        fethPokemons()
        changeStore(type)
      }
    } catch (err) {
      console.log(err)
    }
  }, [type])

  function onSearchChange(event) {
    let value = event.target.value.toLowerCase()
    const filteredPokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(value)
    )
    setSearchedPokemons([...filteredPokemons])
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <main>
          <div className={styles.searchBarContainer}>
            <div>
              <input
                type='search'
                placeholder='POKEMON NAME'
                onChange={(event) => onSearchChange(event)}
              />
              <i className='fas fa-search'></i>
            </div>
          </div>

          <section className={styles.storeContainer}>
            {isLoading ? (
              <div>
                {' '}
                <h1>Loading</h1>{' '}
              </div>
            ) : (
              searchedPokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />
              })
            )}
          </section>
        </main>
      </div>
    </div>
  )
}
