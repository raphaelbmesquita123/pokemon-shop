
import styles from './pokemon-card.styles.module.scss'

export function PokemonCard ({ image, name, experience, price }) {
    return(
        <div>

            <div className={styles.pokemonBackgroundCard}>
                <div className={styles.pokemonCard}>

                    <div className={styles.pokemonExperience}>
                        <strong>{experience}</strong>
                        <strong>xp</strong>
                    </div>
                    <div className={styles.imagePokemonCard}>
                        <img src={`https://pokeres.bastionbot.org/images/pokemon/${image}.png`} alt="1"/>
                        <div></div>
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

