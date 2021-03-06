import React from 'react'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import swal from 'sweetalert'

//utils
import { formatPrice } from '../../utils/formatedPrice'

//styles
import styles from './styles.module.scss'

//context
import { Basket } from '../../context/basket-context'

export function BasketPage() {
  const { basket, store, basketRemoveItem, addRemoveQty, cleanBasket } =
    Basket()

  const total = basket.reduce((pokemonTotal, pokemonBasket) => {
    return (pokemonTotal += pokemonBasket.price * pokemonBasket.qty)
  }, 0)

  function handleAddQntChange(pokemon) {
    addRemoveQty({
      ...pokemon,
      qty: (pokemon.qty += 1),
    })
  }

  function handleRemoveQntChange(pokemon) {
    addRemoveQty({
      ...pokemon,
      qty: (pokemon.qty -= 1),
    })
  }

  function handleCheckout() {
    swal({
      title: 'Your payment has been completed',
      text: `Total: ${formatPrice(total)}`,
      icon: 'success',
    })
    localStorage.removeItem(`@Pokemon-Store: ${store}`)
    cleanBasket()
  }

  return (
    <div className={styles.basketDisplay}>
      <ToastContainer
        position='bottom-right'
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
              <th>Qty</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {basket.map((pokemon) => {
              return (
                <tr key={pokemon.name}>
                  <td>
                    <img src={pokemon.img} alt={pokemon.id} />
                  </td>
                  <td>{pokemon.name}</td>

                  <td className={styles.qtyButtons}>
                    <button
                      onClick={() =>
                        pokemon.qty === 0
                          ? null
                          : handleRemoveQntChange(pokemon)
                      }
                    >
                      <i className='fas fa-minus'></i>
                    </button>

                    <span>{pokemon.qty}</span>
                    <button onClick={() => handleAddQntChange(pokemon)}>
                      <i className='fas fa-plus'></i>
                    </button>
                  </td>

                  <td>{formatPrice(pokemon.price * pokemon.qty)}</td>
                  <td>
                    <i
                      className='fas fa-trash-alt'
                      onClick={() => basketRemoveItem(pokemon)}
                    ></i>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.footDisplay}>
        <button onClick={() => handleCheckout()}>SHOP NOW</button>
        <strong>Total: {formatPrice(total)}</strong>
      </div>
    </div>
  )
}
