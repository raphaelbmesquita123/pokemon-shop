import React, { createContext, useContext, useState, useEffect } from 'react'
import { api } from '../Service/axios'

export const ApplicationContext = createContext({})


export function ApplicationProvider ({ children }) {

    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchField, setSearchField] = useState('')
    const [basket, setBasket] = useState([])

    
    //CHANGING THE SEARCH BAR
    function onSearchChange (event) {
        setSearchField(event.target.value)
        let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
        setPokemons(filteredPokemons)
    }

    //BASKET CHANGE 
    function onBasketChange (image, name, price) {
        let qnt = 1
        const pokemon = {
            id: image,
            img: `https://pokeres.bastionbot.org/images/pokemon/${image}.png`,
            name: name,
            qnt: qnt,
            price: price
        }
        finalBasket(pokemon)
    }


    function finalBasket( pokemon ) {

        basket.forEach((card) => {
            
            if(card.name === pokemon.name){
                basket.splice(basket.indexOf(pokemon +1 ), 1)
            }
        })
        setBasket(basket => [...basket, pokemon ])

    }
  





    //FETCHING DATA
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
     getStaticProps(10)

    }, [setPokemons])



    return (
    <ApplicationContext.Provider
        value={{ 
            pokemons,
            setPokemons,
            onSearchChange,
            isLoading,
            setIsLoading,
            basket,
            setBasket,
            onBasketChange}}>
            
            {children}
    </ApplicationContext.Provider>
    )
}

export const Application = () => {
    return useContext(ApplicationContext)
}

// ===================================================================================================================



