
import './App.css';
import Footer from './Customer/components/Footer/Footer';
import Navigation from './Customer/components/Navigation/Navigation';
import HomePage from './Customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;