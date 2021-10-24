import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './components/authContext/AuthProvider';
import CreateAccount from './components/create-account/CreateAccount';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRouter from './components/private-router/PrivateRouter';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <PrivateRouter path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRouter>
            <Route path='/log-in'>
              <LogIn></LogIn>
            </Route>
            <Route path='/register'>
              <CreateAccount></CreateAccount>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
