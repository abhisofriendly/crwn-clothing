import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import Shop from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
