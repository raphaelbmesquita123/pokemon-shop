import { BasketDisplay } from '../../container/Basket-Display/basket-display-container';
import { HeaderContainer } from '../../container/Header/header-container';
import { SearchBar } from '../../container/Search-Bar/search-bar-container';
import { PokemonCard } from '../../components/card/pokemon-card'

import styles from './slug.style.module.scss';

import { api } from '../../pages/axios'
import {  useState, useEffect } from 'react'


export function Stores (){
    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchPokemons = async (qnt) => {
            for (let i = 1; i <= qnt; i++){
                await fethPokemon(i)
            }
        }

        async function fethPokemon (pokemon){
            await api.get(`${pokemon}`)
            .then(response => {
                    const pokemonData = {
                    id: response.data.id,
                    name: response.data.name,
                    experience: response.data.base_experience,
                    price: response.data.base_experience * 3,
                    type: response.data.types[0].type.name
                }
                setPokemons(pokemons => [...pokemons, pokemonData])
                setIsLoading(false)
            }).catch(err => console.log(err))
        }

        fetchPokemons(100) //quantity of pokemons
    }, [])


    return(

        <div >
            <header>
                <HeaderContainer/>
            </header>
            <div className={styles.wrapper}>
                <main>
                    <SearchBar/>
                    <section className={styles.storeContainer}>
                        {
                            isLoading ? <div> <h1>Loading</h1> </div>
                            
                            : 
                            
                            pokemons.map(pokemon => {
                                return(
                                    <PokemonCard key={pokemon.id} image={pokemon.id} name={pokemon.name} experience={pokemon.experience} price={pokemon.price} type={ pokemon.type  }/>
                                    )
                                }
                                )
                        }
                    </section>
                </main>
                <section className={styles.basketContainer}>
                    <BasketDisplay/>
                </section>
            </div>
        </div>

    )
}


