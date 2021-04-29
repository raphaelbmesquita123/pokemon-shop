import { BasketDisplay } from '../../container/Basket-Display/basket-display-container';
import { HeaderContainer } from '../../container/Header/header-container';
import { SearchBar } from '../../container/Search-Bar/search-bar-container';
import { PokemonCard } from '../../components/card/pokemon-card'
import { Application } from '../../Contexts/application-context'
import { useHistory, useParams } from 'react-router-dom'

import styles from './slug.style.module.scss';


export function Stores ( { store } ){
    const { store } = useParams()
    const { store } = store.match.params
    const { pokemons, onSearchChange, isLoading } = Application()



    return(
        <div >
            <header>
                <HeaderContainer/>
            </header>
            <div className={styles.wrapper}>
                <main>
                    <SearchBar handleChange={onSearchChange}/>
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


