import { colors } from './pokemon-card-colors.js'
import { Basket } from '../../context/basket-context'
import { Link } from 'react-router-dom'

import styles from './pokemon-card.styles.module.scss'

export function PokemonCard ({ pokemon }) {
    const { basketAddItem } = Basket()


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
                        
                        <small>R$ {pokemon.price}</small>

                        <i className="fas fa-shopping-cart" 
                        onClick={() => basketAddItem( pokemon.img, pokemon.name, pokemon.price)}
                        ></i>

                    </div>

                </div>
            </div>
        </div>
    )
}

