import styles from './search-bar.styles.module.scss'

export function SearchBar( { handleChange } ) {
    
    return(
        <div className={styles.searchBarContainer}>
            <div>
                <input 
                type="search"
                placeholder="POKEMON NAME"
                onChange={handleChange}/>
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}