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
                            basket.map(card => {
                                return(
                                    <tr key={card.id}>
                                        <td><img src={card.img} alt={card.id}/></td>
                                        <td>{card.name}</td>
                                        <td> <i className="fas fa-minus-square"></i> {card.qnt} <i className="fas fa-plus-square"></i></td>
                                        <td>{card.price}</td>
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