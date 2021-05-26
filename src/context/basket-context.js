import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { api } from '../Service/axios'

export const BasketContext = createContext({})

export function BasketProvider ({ children }) {

    const [basket, setBasket] = useState(() => {
        const localStore = localStorage.getItem('@Store:')
        const jsonLocalSore = JSON.parse(localStore)
        const localStoraged = localStorage.getItem(`@Pokemon-Store: ${jsonLocalSore}`)
        if(localStoraged){
            return JSON.parse(localStoraged)
        }
        return []
    })
    
    //CLEAN BASKET 
    function cleanBasket (){
        setBasket([])
    }

    //STORE
    function changeStore(store) {
        localStorage.setItem('@Store:', JSON.stringify(store))

        const localStore = localStorage.getItem('@Store:')
        const jsonLocalSore = JSON.parse(localStore)
        
        const localStoraged = localStorage.getItem(`@Pokemon-Store: ${jsonLocalSore}`)
        if(localStoraged) {
            const jsonStorage = JSON.parse(localStoraged)
            setBasket(jsonStorage)
        } 
    }

    //BASKET ADD 
    async function basketAddItem ( pokemonId, pokemonType ) {
        const { data } = await api.get(`pokemon/${pokemonId}`)
        
        const hasPokemonOnBasket = basket.find(pokemon => pokemon.id === data.id)
        const newPokemon = {
            ...data,
            qty: 1,
            price: pokemonId * 5,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
            type: pokemonType
        }
        
        if( hasPokemonOnBasket ){
            const newBasket = basket.filter(pokemon => pokemon.id === newPokemon.id ? {...pokemon, qty: pokemon.qty += 1} : pokemon)

            setBasket([...newBasket])
            localStorage.setItem(`@Pokemon-Store: ${newPokemon.type}`, JSON.stringify([...newBasket])) 
        }

        else {
            setBasket([...basket, newPokemon ])   
            localStorage.setItem(`@Pokemon-Store: ${newPokemon.type}`, JSON.stringify([...basket, newPokemon]))  
        }
    }


    // BASKET REMOVE
    function basketRemoveItem (pokemon){
        const newBasket = basket.filter(pokemonBasket => pokemonBasket.name !== pokemon.name )
        setBasket([...newBasket])
        localStorage.setItem(`@Pokemon-Store: ${pokemon.type}`, JSON.stringify([...newBasket]))
    }

    // BASKET ADD REMOVE QTY
    function addRemoveQty (pokemon){
        
        if(pokemon.qty === 0){
            basketRemoveItem(pokemon)
        }
        if(pokemon.qty === 1){
            toast.error('You can not buy less then 1')
        }
        if(pokemon.qty >= 1){
            const newBasket = basket.map(pokemonBasket => pokemonBasket.name === pokemon.name ? {...pokemonBasket, qty: pokemon.qty} : pokemonBasket )

            setBasket([...newBasket])
            localStorage.setItem(`@Pokemon-Store: ${pokemon.type}`, JSON.stringify([...newBasket]))
        }
    }

    return (
    <BasketContext.Provider
        value={{ 
            basket,
            basketAddItem,
            basketRemoveItem,
            addRemoveQty,  
            changeStore,
            cleanBasket
            }}>
            
            {children}
    </BasketContext.Provider>
    )
}

export const Basket = () => {
    return useContext(BasketContext)
}


