import React from 'react'
import { useState, useEffect } from 'react'

import { api } from '../../Service/axios';
import { useParams } from 'react-router-dom';
import styles from '../../styles/pokemon-page.module.scss'

export function PokemonPage() {
    const { id } = useParams()
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        api.get(`/pokemon/${id}`).then((response) => {
          setPokemon({
            ...response.data,
            name: response.data.name,
            price: response.data.id * 5,
          });
        });
      }, [id]);

    return (
        <div className={styles.PokemonPage}>
            
            <h1>{pokemon.price}</h1>
            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni voluptates ducimus doloremque, ipsam fugit architecto sequi tempora quibusdam hic et. Voluptates placeat aliquid quo suscipit nostrum commodi perspiciatis accusantium.</small>
        </div>
    )
}

