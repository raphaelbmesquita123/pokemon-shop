import React from 'react';
import { Link } from 'react-router-dom'

import styles from './home-page.style.module.scss';


export function HomePage () {


    return(
        <div 
        className={styles.HomePageContainer}>
            <div className={styles.HomePageContent}>
                <h1>What kind of cards do you want to buy ?</h1>

                <div className={styles.buttons}>
                    <Link to="/stores">
                        <button 
                        style={{backgroundColor: `var(--red-500)`}}>Fire</button>
                    </Link>    
                    <Link to="/stores">
                        <button  
                        style={{backgroundColor: `var(--blue-500)`}}>Water</button>
                    </Link>    
                    <Link to="/stores">
                        <button  style={{backgroundColor: `var(--green-500)`}}>Earth</button>
                    </Link>    
                    <Link to="/stores">
                        <button  
                        style={{backgroundColor: `var(--brown-500)`}}>Rock</button>
                    </Link>    
                    <Link to="/stores">
                        <button 
                        style={{backgroundColor: `orangered`}}>All Cards</button>
                    </Link>    
                </div>
            </div>
        </div>
    )
}