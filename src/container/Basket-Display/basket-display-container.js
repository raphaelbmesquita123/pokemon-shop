import styles from './basket-display.styles.module.scss'
import { Application } from '../../Contexts/application-context'

export function BasketDisplay (){
    const { basket } = Application()

    return(
        <div className={styles.basketDisplay}>
            <div className={styles.headDisplay}>
                <i className="fas fa-shopping-cart"></i>
                <strong>Basket</strong>
            </div>
            <div className={styles.tableDisplay}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Qnt</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody> 
                        {
                            basket.map(cart => {
                                return(
                                    <tr key={cart.name}>
                                        <td><img src={cart.img} alt={cart.id}/></td>
                                        <td>{cart.name}</td>
                                        <td> <i className="fas fa-minus-square"></i> {cart.qnt} <i className="fas fa-plus-square"></i></td>
                                        <td>{cart.price}</td>
                                        <td><i className="fas fa-trash-alt"></i></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
            <div className={styles.footDisplay}>
                <button>SHOP NOW</button>
                <strong>Total $450.00</strong>
            </div>
        </div>
    )
}