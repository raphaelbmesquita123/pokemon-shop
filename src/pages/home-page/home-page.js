import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './home-page.style.module.scss';

export function HomePage () {
    const [ store, setStore ] = useState('allCards')

    return(
        <div 
        className={styles.HomePageContainer}>
            <div className={styles.HomePageContent}>
                <h1>What kind of cards do you want to buy ?</h1>

                <div className={styles.buttons}>
                    <Link to="/Stores">
                        <button 
                        style={{backgroundColor: `var(--red-500)`}}
                        onClick={() => setStore('fire')}>Fire</button>
                    </Link>    
                    <Link to="/Stores">
                        <button  
                        style={{backgroundColor: `var(--blue-500)`}}
                        onClick={() => setStore('water')}>Water</button>
                    </Link>    
                    <Link to="/Stores">
                        <button  style={{backgroundColor: `var(--green-500)`}}
                        onClick={() => setStore('Earth')}>Earth</button>
                    </Link>    
                    <Link to="/Stores">
                        <button  
                        style={{backgroundColor: `var(--brown-500)`}}
                        onClick={() => setStore('rock')}>Rock</button>
                    </Link>    
                    <Link to="/Stores">
                        <button 
                        style={{backgroundColor: `orangered`}}
                        onClick={() => setStore('allCards')}>All Cards</button>
                    </Link>    
                </div>
            </div>
        </div>
    )
}