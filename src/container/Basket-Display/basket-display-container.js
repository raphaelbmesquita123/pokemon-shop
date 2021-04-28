import styles from './basket-display.styles.module.scss'

export function BasketDisplay (){

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
                        <tr>
                            <td>bulbasqdwqdalro</td>
                            <td>pikachu <br/> 1500</td>
                            <td>2</td>
                            <td>25</td>
                        </tr>
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