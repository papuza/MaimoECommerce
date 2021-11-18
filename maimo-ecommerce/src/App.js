import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../src/pages/Home'
import Category from '../src/pages/Category'
import Product from './pages/Product';
import 'bulma/css/bulma.min.css';
import { CartProvider } from './Contexts/CartContext';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Acá agrego el cartProvider y englobo toda la app. De esta manera puedo acceder al carrito desde cualquier lado de la app */}
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
            <Route exact path={`/checkout`}>
              <Checkout />
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
