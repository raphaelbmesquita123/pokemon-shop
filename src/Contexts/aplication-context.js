import { createContext, useContext } from 'react'
import { useState } from 'react'

export const AplicationContext = createContext({})

export function AplicationProvider ({ children }) {
    const [pokemons, setPokemons] = useState([])
    const [listState, setListState] = useState([])
    const [searchField, setSearchField] = useState('')

    function onSearchChange (event) {
        let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
        setSearchField(event.target.value)
        setPokemons(filteredPokemons)
    }


    return (
    <AplicationContext.Provider
        value={{ 
            pokemons,
            setPokemons,
            listState,
            setListState,
            searchField,
            onSearchChange,}}>
            
            {children}
    </AplicationContext.Provider>
    )
}

export const Aplication = () => {
    return useContext(AplicationContext)
}
