import styles from './App.module.scss';
import { BasketDisplay } from './container/Basket-Display/basket-display-container';
import { HeaderContainer } from './container/Header/header-container';
import { SearchBar } from './container/Search-Bar/search-bar-container';
import { Stores } from './pages/stores/Stores';

function App() {
  return (
    <div >
      <header>
        <HeaderContainer/>
      </header>
      <div className={styles.wrapper}>
        <main>
          <SearchBar/>
          <section className={styles.storeContainer}>
            <Stores/>
          </section>
        </main>

        <section className={styles.basketContainer}>
          <BasketDisplay/>
        </section>

      </div>

    </div>
  );
}
export default App;
