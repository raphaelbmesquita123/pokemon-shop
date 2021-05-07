import { Stores } from './pages/stores/[slug]';
import { HomePage }from './pages/home-page/home-page';
import { BasketPage } from './pages/basket-page/basket-page';
import { ApplicationProvider } from './Contexts/application-context';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PokemonPage } from './pages/pokemon-page/pokemon-page'
import { HeaderContainer } from './container/Header/header-container'

import styles from './App.module.scss'
import { BasketDisplay } from './container/Basket-Display/basket-display-container';

function App() {

  return (
    <ApplicationProvider>

      <BrowserRouter >
        <div className={styles.App}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <main>
              <header>
                <HeaderContainer/>
              </header>
              <section>
                <div className={styles.route}>
                  <Route exact path="/stores" component={Stores}/>
                  <Route exact path="/stores/pokemon/:id" component={PokemonPage}/>
                  <Route exact path="/Basket" component={BasketPage}/>
                </div>
                <div className={styles.basket}>
                  <BasketDisplay />
                </div>
              </section>
            </main>

          </Switch>
        </div>
      </BrowserRouter>
      
    </ApplicationProvider>
  );
}
export default App;

