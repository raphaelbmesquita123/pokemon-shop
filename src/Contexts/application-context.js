import { createContext, useContext } from 'react'
import { useState } from 'react'

export const ApplicationContext = createContext({})

export function ApplicationProvider ({ children }) {
    const [pokemons, setPokemons] = useState([])
    const [listState, setListState] = useState([])
    const [searchField, setSearchField] = useState('')

    function onSearchChange (event) {
        let filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchField.toLowerCase()))
        setSearchField(event.target.value)
        setPokemons(filteredPokemons)
    }


    return (
    <ApplicationContext.Provider
        value={{ 
            pokemons,
            setPokemons,
            listState,
            setListState,
            searchField,
            onSearchChange,}}>
            
            {children}
    </ApplicationContext.Provider>
    )
}

export const Application = () => {
    return useContext(ApplicationContext)
}
