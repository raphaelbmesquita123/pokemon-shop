import { BasketProvider } from './context/basket-context';

import { Stores } from './pages/stores/stores';
import { BasketPage } from './pages/basket-page/basket-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PokemonPage } from './pages/pokemon-page/pokemon-page'
import { HeaderContainer } from './container/Header/header-container'
import { HomePage } from './pages/home/home-page';

import styles from './styles/App.module.scss'

function App() {
  
  return (
    <BasketProvider>
      <BrowserRouter >
        <div className={styles.App}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <>
            <HeaderContainer/>
            <Route exact path="/stores/:type" component={Stores}/>
            <Route exact path="/stores/pokemon/:id" component={PokemonPage}/>
            <Route exact path="/basket" component={BasketPage}/>
            </>
          </Switch>
        </div>
      </BrowserRouter>
      
    </BasketProvider>
  );
}
export default App;

