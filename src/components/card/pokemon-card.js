import { colors } from './pokemon-card-colors.js'
import { Basket } from '../../context/basket-context'
import { Link } from 'react-router-dom'

import styles from './pokemon-card.styles.module.scss'
import { formatPrice } from '../../service/formatedPrice.js'

export function PokemonCard ({ pokemon }) {
    const { basketAddItem } = Basket()

    function handdleAddPokemonToBasket(pokemonId, pokemonType){
        basketAddItem(pokemonId, pokemonType)
    }

    return(
        <div>
            <div className={styles.pokemonBackgroundCard} style={{backgroundColor: `${colors[pokemon.type].backgroundCardColor}`}}>
                <div className={styles.pokemonCard} style={{backgroundColor: `${colors[pokemon.type].cardColor}`}}>
                    <Link to={`/stores/pokemon/${pokemon.name}`}>
                    <div className={styles.imagePokemonCard}>
                            <img src={ pokemon.img } alt={pokemon.name}/>

                            <div style={{backgroundColor: `${colors[pokemon.type].circleColor}`}}></div>
                    </div>
                    </Link>

                    <div className={styles.pokemonInfo}> 

                        <h3>{pokemon.name}</h3>
                        
                        <small>{formatPrice(pokemon.price)}</small>

                        <i className="fas fa-shopping-cart" 
                        onClick={() => handdleAddPokemonToBasket( pokemon.id, pokemon.type )}
                        ></i>

                    </div>

                </div>
            </div>
        </div>
    )
}

