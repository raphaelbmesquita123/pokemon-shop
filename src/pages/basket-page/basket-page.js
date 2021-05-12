import React from 'react';
import { BasketDisplay } from '../../container/Basket-Display/basket-display-container';
import styles from './basket-page.styles.module.scss'

export function BasketPage () {
    return(
        <div className={styles.basketPage}>
            <BasketDisplay />
        </div>
    )
}