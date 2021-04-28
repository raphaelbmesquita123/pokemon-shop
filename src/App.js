import { Stores } from './pages/stores/[slug]';
import { HomePage }from './pages/home-page/home-page';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import styles from './App.module.scss'

function App() {
  return (
    <BrowserRouter >
      <div className={styles.App}>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/Stores" component={Stores}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;

