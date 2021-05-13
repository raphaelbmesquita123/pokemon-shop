import { Stores } from './pages/stores/[slug]';
import { BasketPage } from './pages/basket-page/basket-page';
import { ApplicationProvider } from './Contexts/application-context';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PokemonPage } from './pages/pokemon-page/pokemon-page'
import { HeaderContainer } from './container/Header/header-container'


import styles from './App.module.scss'

function App() {
  
  return (
    <ApplicationProvider>
      <BrowserRouter >
        <div className={styles.App}>
            <HeaderContainer/>
          <Switch>
            <>
            
            <Route exact path="/" component={Stores}/>
            <Route exact path="/stores/pokemon/:id" component={PokemonPage}/>
            <Route exact path="/basket" component={BasketPage}/>
            </>
          </Switch>
        </div>
      </BrowserRouter>
      
    </ApplicationProvider>
  );
}
export default App;

