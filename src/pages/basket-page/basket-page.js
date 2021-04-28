import React from 'react';
import { HeaderContainer } from '../../container/Header/header-container'
import styles from './basket-page.style.module.scss';

export function BasketPage () {
    return(
        <div className={styles.basketPage}>
            <HeaderContainer />
        </div>
    )
}