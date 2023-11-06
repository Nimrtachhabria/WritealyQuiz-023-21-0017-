import logo from './logo.svg';
import './App.css';
import header from './components/header'
import Herosection from './components/Herosection'
import Reviews from './components/Reviews';
function App() {
  return (
    <div className="App">
    <header></header>
    <Herosection></Herosection>
    <Reviews></Reviews>
    </div>
  );
}

export default App;
