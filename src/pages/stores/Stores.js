import { useState, useEffect } from 'react'
import styles from './slug.style.module.scss';



export function Stores (){
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        for(let i = 1; i <= 5; i++){
             fethPokemon(i)
        }

        async function fethPokemon (num) {
            const url =  `https://pokeapi.co/api/v2/pokemon/${num}`
            const res = await fetch(url)
            const data = await res.json()
            setPokemons(...pokemons, pokemons.push(data))
        }
    }, [])



    return(

        <div className={styles.storeContainer}>
            <div>
                {
                    pokemons.map(pokemon => console.log(pokemon))
                }
            </div>
        </div>
    )
}


