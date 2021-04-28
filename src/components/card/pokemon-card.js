import { colors } from './pokemon-card-colors.js'

import styles from './pokemon-card.styles.module.scss'

export function PokemonCard ({ image, name, experience, price, type}) {

    return(
        <div>
            <div className={styles.pokemonBackgroundCard} style={{backgroundColor: `${colors[type].backgroundCardColor}`}}>
                <div className={styles.pokemonCard} style={{backgroundColor: `${colors[type].cardColor}`}}>
                    <div className={styles.pokemonExperience}>
                        <strong>{experience}</strong>
                        <strong>xp</strong>
                    </div>
                    <div className={styles.imagePokemonCard}>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${image}.png`} alt="1"/>

                        <div style={{backgroundColor: `${colors[type].circleColor}`}}></div>
                    </div>
                    <div className={styles.pokemonInfo}> 
                        <h3>{name}</h3>
                        <small>R$ {price}</small>
                        <i className="fas fa-shopping-cart"></i>
                    </div>

                </div>
            </div>
        </div>
    )
}

