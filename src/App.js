import { BrowserRouter, Route, Switch } from 'react-router-dom'

//container
import { HeaderContainer } from './container/Header'

//pages
import { BasketPage } from './pages/basket-page'
import { Stores } from './pages/stores'
import { PokemonPage } from './pages/pokemon-page'
import { HomePage } from './pages/home'

//styles
import styles from './styles/App.module.scss'

//providers
import { BasketProvider } from './context/basket-context'

function App() {
  return (
    <BasketProvider>
      <BrowserRouter>
        <div className={styles.App}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <>
              <HeaderContainer />
              <Route exact path='/stores/:type' component={Stores} />
              <Route exact path='/stores/pokemon/:id' component={PokemonPage} />
              <Route exact path='/basket' component={BasketPage} />
            </>
          </Switch>
        </div>
      </BrowserRouter>
    </BasketProvider>
  )
}
export default App
