
import styles from './pokemon-card.styles.module.scss'

export function PokemonCard ({ image, name, experience, price, type}) {

    const colors = {
        //fire shop
        fire:{
            backgroundCardColor: `var(--red-300)`,
            cardColor: `var(--red-500)`,
            circleColor: `var(--red-300)`
        },
        dragon:{
            backgroundCardColor: `var(--red-300)`,
            cardColor: `var(--red-500)`,
            circleColor: `var(--red-300)`
        },

        //water shop
        water:{
            backgroundCardColor: `var(--blue-300)`,
            cardColor: `var(--blue-500)`,
            circleColor: `var(--blue-300)`
        },

        //earth shop
        grass:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        electric:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        ground:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        fairy:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        poison:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        flying:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        psychic:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        fighting:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        normal:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },
        ghost:{
            backgroundCardColor: `var(--green-300)`,
            cardColor: `var(--green-500)`,
            circleColor: `var(--green-300)`
        },

        //rock shop
        rock:{
            backgroundCardColor: `var(--brown-300)`,
            cardColor: `var(--brown-500)`,
            circleColor: `var(--brown-300)`
        },
        bug:{
            backgroundCardColor: `var(--brown-300)`,
            cardColor: `var(--brown-500)`,
            circleColor: `var(--brown-300)`
        },
    }

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

