
import './App.css';
import Cart from './Customer/components/Cart/Cart';
import Checkout from './Customer/components/Checkout/Checkout';
import Footer from './Customer/components/Footer/Footer';
import Navigation from './Customer/components/Navigation/Navigation';
import Product from './Customer/components/Product/Product';
import ProductDetails from './Customer/components/ProductDetails/ProductDetails';
import HomePage from './Customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;