import { SearchBar } from '../../container/Search-Bar/search-bar-container';
import { PokemonCard } from '../../components/card/pokemon-card'
import { Application } from '../../Contexts/application-context'


import styles from './slug.style.module.scss';


export function Stores ( ){
    const { pokemons, isLoading } = Application()
    return(
        <div >
            <div className={styles.wrapper}>
                <main>
                    <SearchBar />
                    
                    <section className={styles.storeContainer}>
                        {
                            isLoading ? <div> <h1>Loading</h1> </div>
                            
                            : 
                            
                            pokemons.map(pokemon => {
                                return(
                                    <PokemonCard key={pokemon.id} img={pokemon.img} name={pokemon.name} experience={pokemon.experience} price={pokemon.price} type={ pokemon.type}/>
                                    )
                                }
                                )
                        }
                    </section>
                </main>
            </div>
        </div>

    )
}


