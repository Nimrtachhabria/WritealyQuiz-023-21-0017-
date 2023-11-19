import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Herosection from './components/Herosection'
import Reviews from './components/Reviews';

function App() {
  return (
    <div className="App">
    <Header />
     <Herosection />
    </div>
  );
}

export default App;
