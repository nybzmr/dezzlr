
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Customer/components/Cart/Cart';
import Checkout from './Customer/components/Checkout/Checkout';
import Footer from './Customer/components/Footer/Footer';
import Navigation from './Customer/components/Navigation/Navigation';
import Order from './Customer/components/Order/Order';
import OrderDetails from './Customer/components/Order/OrderDetails';
import Product from './Customer/components/Product/Product';
import ProductDetails from './Customer/components/ProductDetails/ProductDetails';
import HomePage from './Customer/pages/HomePage/HomePage';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
      </Routes>
    </div>
  );
}

export default App;