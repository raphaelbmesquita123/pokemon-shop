import React from 'react'
import styles from '../../styles/pokemon-page.module.scss'
import { Application } from '../../Contexts/application-context'
import { PokemonCard }  from '../../components/card/pokemon-card' 


export function PokemonPage({ match }) {
    const { pokemons } = Application()
    const pokemon = pokemons.find((p) => p.name === match.params.id)
    console.log(pokemon)
    return (
        <div className={styles.PokemonPage}>
            <PokemonCard key={pokemon.id} image={pokemon.id} name={pokemon.name} experience={pokemon.experience} price={pokemon.price} type={ pokemon.type  }/>
            
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni voluptates ducimus doloremque, ipsam fugit architecto sequi tempora quibusdam hic et. Voluptates placeat aliquid quo suscipit nostrum commodi perspiciatis accusantium.</small>
        </div>
    )
}

