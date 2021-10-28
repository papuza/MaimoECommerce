import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../src/pages/Home'
import Category from '../src/pages/Category'
import Product from './pages/Product';
import Navbar from './components/Navbar/Navbar';
import 'bulma/css/bulma.min.css';
import { CartProvider } from './Contexts/CartContext';

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Switch>
            <Route exact path="/shop">
              <Category />
            </Route>
            <Route exact path="/category/:id">
              <Category />
            </Route>
            <Route exact path="/product/:id">
              <Product />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="*">
              Not Found
            </Route>
          </Switch>
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
