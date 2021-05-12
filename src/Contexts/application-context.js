import React, { createContext, useContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { api } from '../Service/axios'

export const ApplicationContext = createContext({})


export function ApplicationProvider ({ children }) {

    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchField, setSearchField] = useState('')
    const [basket, setBasket] = useState(() => {
        const localStoraged = localStorage.getItem('@Pokemon-Store: basket')

        if (localStoraged){
            return JSON.parse(localStoraged)
        }
        return []
    })
    
    //CHANGING THE SEARCH BAR
    function onSearchChange (event) {
        setSearchField(event.target.value)
        const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
        setPokemons([...filteredPokemons])
    }
    console.log(searchField)

    //BASKET ADD 
    function basketAddItem ( img, name, price) {
        const newPokemon = {
            img: img,
            name: name,
            qnt: 1,
            price: price
        }

        const hasPokemonOnBasket = basket.find(pokemon => pokemon.name === name)
        
        if(hasPokemonOnBasket){
            const newBasket = basket.filter(pokemon => pokemon.name === name ? {...pokemon, qnt: pokemon.qnt += 1} : pokemon)

            setBasket([...newBasket])
            localStorage.setItem('@Pokemon-Store: basket', JSON.stringify([...newBasket])) 

        } else{
            setBasket([...basket, newPokemon ])   
            localStorage.setItem('@Pokemon-Store: basket', JSON.stringify([...basket, newPokemon]))    
        }
    }


    // BASKET REMOVE
    function basketRemoveItem (pokemonName){
        const newBasket = basket.filter(pokemon => pokemon.name !== pokemonName )
        setBasket([...newBasket])
        localStorage.setItem('@Pokemon-Store: basket', JSON.stringify([...newBasket]))
    }

    // BASKET ADD REMOVE QNT
    function addRemoveQnt (pokemon){
        if(pokemon.qnt === 0){
            basketRemoveItem(pokemon.name)
        }
        if(pokemon.qnt === 1){
            toast.error('You can not buy less then 1')
        }
        if(pokemon.qnt >= 1){
            const newBasket = basket.map(pokemonBasket => pokemonBasket.name === pokemon.name ? {...pokemonBasket, qnt: pokemon.qnt} : pokemonBasket )

            setBasket([...newBasket])
            localStorage.setItem('@Pokemon-Store: basket', JSON.stringify([...newBasket]))
        }
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
                        type: response.data.types[0].type.name,
                        img: `https://pokeres.bastionbot.org/images/pokemon/${response.data.id}.png` 
                    }     
    
                setPokemons(pokemons => [...pokemons, pokemonData])
                setIsLoading(false)
                }).catch(err => console.log(err))
            }
        }
     setPokemons([])
     getStaticProps(30)

    }, [])



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
            basketAddItem,
            basketRemoveItem,
            addRemoveQnt}}>
            
            {children}
    </ApplicationContext.Provider>
    )
}

export const Application = () => {
    return useContext(ApplicationContext)
}


