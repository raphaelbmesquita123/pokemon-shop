import React, { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

export const BasketContext = createContext({})

export function BasketProvider ({ children }) {

    const [pokemons, setPokemons] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    const [basket, setBasket] = useState(() => {
        const localStoraged = localStorage.getItem('@Pokemon-Store: basket')

        if (localStoraged){
            return JSON.parse(localStoraged)
        }
        return []
    })

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

    return (
    <BasketContext.Provider
        value={{ 
            pokemons,
            setPokemons,
            isLoading,
            setIsLoading,
            basket,
            setBasket,
            basketAddItem,
            basketRemoveItem,
            addRemoveQnt,            
            }}>
            
            {children}
    </BasketContext.Provider>
    )
}

export const Basket = () => {
    return useContext(BasketContext)
}


