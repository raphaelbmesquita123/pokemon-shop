import { Stores } from './pages/stores/[slug]';
import { HomePage }from './pages/home-page/home-page';
import { BasketPage } from './pages/basket-page/basket-page';
import { ApplicationProvider } from './Contexts/application-context';
import { BrowserRouter, Route, Switch } from 'react-router-dom'




import styles from './App.module.scss'

function App() {

  return (
    <ApplicationProvider>
      <BrowserRouter >
        <div className={styles.App}>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/Stores/:id" render={({match}) => ( <Stores store={store.find(s => s.id === match.params.id)}/> )} />
            <Route path="/Basket" component={BasketPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    </ApplicationProvider>
  );
}
export default App;

