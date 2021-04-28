import { Stores } from './pages/stores/[slug]';
import { HomePage }from './pages/home-page/home-page';
import { BasketPage } from './pages/basket-page/basket-page';

import { BasketContextProvider } from './Contexts/Basket-Context';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './App.module.scss'

function App() {


  return (
    <BasketContextProvider>
      <BrowserRouter >
        <div className={styles.App}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/Stores" component={Stores}/>
            <Route path="/Basket" component={BasketPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    </BasketContextProvider>
  );
}
export default App;

