import React from 'react'
import { Application } from '../../Contexts/application-context';
import styles from './basket-page.styles.module.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function BasketPage () {
    const { basket, basketRemoveItem, addRemoveQnt } = Application()
    
    const total = basket.reduce((pokemonTotal, pokemonBasket) => {
        return pokemonTotal += (pokemonBasket.price * pokemonBasket.qnt)
    }, 0)

    function handleAddQntChange (pokemon){
        addRemoveQnt({
            ...pokemon,
            qnt: pokemon.qnt += 1
        })
    }

    function handleRemoveQntChange (pokemon){
        addRemoveQnt({
            ...pokemon,
            qnt: pokemon.qnt -= 1
        })
    }

    return(
        <div className={styles.basketDisplay}>

           <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />

            <div className={styles.tableDisplay}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Qnt</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody> 
                    
                        {
                            basket.map(pokemon => {
                                return(
                                    <tr key={pokemon.name}>
                                        <td><img src={pokemon.img} alt={pokemon.id}/></td>
                                        <td>{pokemon.name}</td>
                                        <div>
                                            <td> 
                                                <button onClick={() => pokemon.qnt === 0 ? null : handleRemoveQntChange(pokemon)}>
                                                    <i className="fas fa-minus" ></i> 
                                                </button>

                                                <span>
                                                    {pokemon.qnt} 
                                                </span>
                                                <button onClick={() => handleAddQntChange(pokemon)}>
                                                    <i className="fas fa-plus" ></i>
                                                </button>

                                            </td>
                                        </div>

                                        <td>{pokemon.price * pokemon.qnt}</td>
                                        <td><i className="fas fa-trash-alt" onClick={() => basketRemoveItem(pokemon.name)}></i></td>
                                    </tr>
                                )
                            })
                        }

                        
                    </tbody>
                    
                </table>
            </div>

            <div className={styles.footDisplay}>
                <button>SHOP NOW</button>
                <strong>Total ${total}</strong>
            </div>
        </div>
    )
}

