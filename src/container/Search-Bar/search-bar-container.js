import styles from './search-bar.styles.module.scss'
import { Application } from '../../Contexts/application-context'

export function SearchBar () {
    const { onSearchChange } = Application()
    return(
        <div className={styles.searchBarContainer}>
            <div>
                <input 
                type="search"
                placeholder="POKEMON NAME"
                onChange={(event) => onSearchChange(event)}/>
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}