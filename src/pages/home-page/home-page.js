import React, { useEffect } from 'react';
import { api } from '../../Service/axios'
import { Link } from 'react-router-dom'
import { Application } from '../../Contexts/application-context';
import styles from './home-page.style.module.scss';

export function HomePage () {

    const { onChangeStore, setPokemons, setIsLoading } = Application()

    // useEffect(() => {
    //        const getStaticProps = async (qnt) => {
    //            for (let i = 1; i <= qnt; i++){
    //                await fethPokemon(i)
    //            }
    //            async function fethPokemon (pokemon){
    //                await api.get(`${pokemon}`)
    //                .then(response => {
    //                        const pokemonData = {
    //                        id: response.data.id,
    //                        name: response.data.name,
    //                        experience: response.data.base_experience,
    //                        price: response.data.base_experience * 3,
    //                        type: response.data.types[0].type.name
    //                    }     
       
    //                setPokemons(pokemons => [...pokemons, pokemonData])
    //                setIsLoading(false)
           
    //                }).catch(err => console.log(err))
    //            }
    //        }
        
    //     setPokemons([])
    //     getStaticProps(10)

    //    }, [setPokemons])
   

    return(
        <div 
        className={styles.HomePageContainer}>
            <div className={styles.HomePageContent}>
                <h1>What kind of cards do you want to buy ?</h1>

                <div className={styles.buttons}>
                    <Link to="/Stores">
                        <button 
                        style={{backgroundColor: `var(--red-500)`}}
                        onClick={() => onChangeStore('fire')}  >Fire</button>
                    </Link>    
                    <Link to="/Stores">
                        <button  
                        style={{backgroundColor: `var(--blue-500)`}}
                        onClick={() => onChangeStore('water')}>Water</button>
                    </Link>    
                    <Link to="/Stores">
                        <button  style={{backgroundColor: `var(--green-500)`}}
                        onClick={() => onChangeStore('earth')}>Earth</button>
                    </Link>    
                    <Link to="/Stores">
                        <button  
                        style={{backgroundColor: `var(--brown-500)`}}
                        onClick={() => onChangeStore('rock')}>Rock</button>
                    </Link>    
                    <Link to="/Stores">
                        <button 
                        style={{backgroundColor: `orangered`}}
                        onClick={() => onChangeStore('allCards')}>All Cards</button>
                    </Link>    
                </div>
            </div>
        </div>
    )
}