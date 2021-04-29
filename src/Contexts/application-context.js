import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../Service/axios'


export const ApplicationContext = createContext({})


export function ApplicationProvider ({ children }) {

    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchField, setSearchField] = useState('a')
    const [fireStore, setFireStore] = useState([])
    
    // FETCHING THE DATA
    useEffect(() => {
        const getStaticProps = async (qnt) => {
            for (let i = 1; i <= qnt; i++){
                await fethPokemon(i)
            }
            async function fethPokemon (pokemon){
                await api.get(`${pokemon}`)
                .then(response => {
                        const pokemonData = {
                        id: response.data.id,
                        name: response.data.name,
                        experience: response.data.base_experience,
                        price: response.data.base_experience * 3,
                        type: response.data.types[0].type.name
                    }     
    
                setPokemons(pokemons => [...pokemons, pokemonData])
                setIsLoading(false)
        
                }).catch(err => console.log(err))
            }
        }
        setPokemons([])
        getStaticProps(30) //QUANTITTY OF POKEMONS
    }, [setPokemons])


    //CHANGING THE SEARCH BAR
    function onSearchChange (event) {
        setSearchField(event.target.value)
        let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
        setPokemons(filteredPokemons)
    }

    // fireStore
    function onChangeStore (event){
        const allFirePokemons = pokemons.filter(pokemon => pokemon.type === 'fire')

        const allWaterPokemons = pokemons.filter(pokemon => pokemon.type === 'water')

        const allEarthPokemons = pokemons.filter(pokemon => pokemon.type === 'grass')

        const allRockPokemons = pokemons.filter(pokemon => pokemon.type === 'bug')

        const allPokemons = pokemons
        
        if(event === 'fire'){
            console.log(fireStore)
            setFireStore(allFirePokemons)
            
        } 

        console.log(event)
    }




    return (
    <ApplicationContext.Provider
        value={{ 
            pokemons,
            setPokemons,
            onSearchChange,
            isLoading,
            onChangeStore}}>
            
            {children}
    </ApplicationContext.Provider>
    )
}

export const Application = () => {
    return useContext(ApplicationContext)
}

// ===================================================================================================================





// //STORE CHANGE
// if ( store === 'fire' ){
//     const allfirepokemons = pokemons.filter(pokemon => pokemon.type === 'fire')
//     setPokemons([allfirepokemons])
//     console.log(allfirepokemons)
//     console.log(pokemons)
// }