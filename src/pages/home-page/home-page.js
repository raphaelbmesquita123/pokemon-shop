import React from 'react';
import { Link } from 'react-router-dom'
import styles from './home-page.style.module.scss';

export function HomePage () {
    return(
        <div className={styles.HomePageContainer}>
            <h1>oi</h1>
            <Link to="/Stores">
                <button >vai pra pagina</button>
            </Link>    
        </div>
    )
}