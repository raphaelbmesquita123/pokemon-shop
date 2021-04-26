import styles from './search-bar.styles.module.scss'

export function SearchBar() {
    return(
        <div className={styles.searchBarContainer}>
            <div>
                <input />
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}