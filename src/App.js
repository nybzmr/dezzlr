
import './App.css';
import Footer from './Customer/components/Footer/Footer';
import Navigation from './Customer/components/Navigation/Navigation';
import Product from './Customer/components/Product/Product';
import HomePage from './Customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        <Product/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;