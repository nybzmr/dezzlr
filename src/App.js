
import './App.css';
import Navigation from './Customer/components/Navigation/Navigation';
import HomePage from './Customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App;