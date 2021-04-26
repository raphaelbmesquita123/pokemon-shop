import { useState, useEffect } from 'react'
import styles from './slug.style.module.scss';

export function Stores (){
    const [pokemons, setPokemons] = useState([])
    

    useEffect(async () => {
        const url =  `https://pokeapi.co/api/v2/pokemon/5`
            const res = await fetch(url)
            const data = await res.json()
            const price = Math.floor(Math.random() * 100 + Number(data.base_experience))
            data.price = price
            console.log(data)
            setPokemons(data)

        // for(let i = 1; i <= 5; i++){
        //     fethPokemon(i)
        // }
        
        // async function fethPokemon (num) {
        //     const url =  `https://pokeapi.co/api/v2/pokemon/${num}`
        //     const res = await fetch(url)
        //     const data = await res.json()
        //     createPokemonCard(data)
        //     }
        // function createPokemonCard(pokemon){
            
        // }

    }, [])



    return(

        <div className={styles.storeContainer}>
            
            {
                <div className={styles.pokemonCard}>
                    <div className={styles.pokemonExperience}>
                        <small>{pokemons.base_experience}</small>
                        <strong>xp</strong>
                    </div>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemons.id}.png`}/>
                    <div className={styles.pokemonInfo}> 
                        <h3>{pokemons.name}</h3>
                        <small>R$ {pokemons.price}</small>
                    </div>
                </div>
            }
            {
                <div className={styles.pokemonCard}>
                    <div className={styles.pokemonExperience}>
                        <small>{pokemons.base_experience}</small>
                        <strong>xp</strong>
                    </div>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemons.id}.png`}/>
                    <div className={styles.pokemonInfo}> 
                        <h3>{pokemons.name}</h3>
                        <small>R$ {pokemons.price}</small>
                    </div>
                </div>
            }
            {
                <div className={styles.pokemonCard}>
                    <div className={styles.pokemonExperience}>
                        <small>{pokemons.base_experience}</small>
                        <strong>xp</strong>
                    </div>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemons.id}.png`}/>
                    <div className={styles.pokemonInfo}> 
                        <h3>{pokemons.name}</h3>
                        <small>R$ {pokemons.price}</small>
                    </div>
                </div>
            }
            {
                <div className={styles.pokemonCard}>
                    <div className={styles.pokemonExperience}>
                        <small>{pokemons.base_experience}</small>
                        <strong>xp</strong>
                    </div>
                    <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemons.id}.png`}/>
                    <div className={styles.pokemonInfo}> 
                        <h3>{pokemons.name}</h3>
                        <small>R$ {pokemons.price}</small>
                    </div>
                </div>
            }
        
        </div>
    )
}


