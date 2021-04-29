import { colors } from './pokemon-card-colors.js'
import { Application } from '../../Contexts/application-context'

import styles from './pokemon-card.styles.module.scss'

export function PokemonCard ({ image, name, experience, price, type}) {

    const { onBasketChange } = Application()

    return(
        
        
        <div>
            <div className={styles.pokemonBackgroundCard} style={{backgroundColor: `${colors[type].backgroundCardColor}`}}>
                <div className={styles.pokemonCard} style={{backgroundColor: `${colors[type].cardColor}`}}>
                    <div className={styles.pokemonExperience}>
                        <strong>{experience}</strong>
                        <strong>xp</strong>
                    </div>
                    <div className={styles.imagePokemonCard}>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${ image }.png`} alt={`${image}`}/>

                        <div style={{backgroundColor: `${colors[type].circleColor}`}}></div>
                    </div>
                    <div className={styles.pokemonInfo}> 

                        <h3>{name}</h3>
                        
                        <small>R$ {price}</small>

                        <i className="fas fa-shopping-cart" 
                        onClick={() => onBasketChange(image, name, price)}></i>

                    </div>

                </div>
            </div>
        </div>
    )
}

