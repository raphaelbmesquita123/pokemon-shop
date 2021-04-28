import { createContext } from 'react'
import { useState } from 'react'

export const BasketContext = createContext({})

export function BasketContextProvider ({ children }) {
    const [listState, setListState] = useState([])


    return (
    <BasketContext.Provider
        value={{ 
            listState,
            setListState}}>
            
            {children}
    </BasketContext.Provider>
    )
}