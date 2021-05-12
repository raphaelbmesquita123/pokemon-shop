import { colors } from './pokemon-card-colors.js'
import { Application } from '../../Contexts/application-context'
import { Link } from 'react-router-dom'

import styles from './pokemon-card.styles.module.scss'

export function PokemonCard ({ img, name, experience, price, type}) {

    const { basketAddItem,  } = Application()

    return(
        <div>
            <div className={styles.pokemonBackgroundCard} style={{backgroundColor: `${colors[type].backgroundCardColor}`}}>
                <div className={styles.pokemonCard} style={{backgroundColor: `${colors[type].cardColor}`}}>
                    <div className={styles.pokemonExperience}>
                        <strong>{experience}</strong>
                        <strong>xp</strong>
                    </div>
                    
                    <Link to={`/stores/pokemon/${name}`}>
                    <div className={styles.imagePokemonCard}>
                            <img src={img} alt={name}/>

                            <div style={{backgroundColor: `${colors[type].circleColor}`}}></div>
                    </div>
                    </Link>

                    <div className={styles.pokemonInfo}> 

                        <h3>{name}</h3>
                        
                        <small>R$ {price}</small>

                        <i className="fas fa-shopping-cart" 
                        onClick={() => basketAddItem( img, name, price)}></i>

                    </div>

                </div>
            </div>
        </div>
    )
}

