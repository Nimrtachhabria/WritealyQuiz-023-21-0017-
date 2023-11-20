import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Herosection from './components/Herosection'
// import Reviews from './components/Reviews';
import Contactus from './components/Contactus';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header />
     <Herosection />
     <Contactus />
     <Footer />
    </div>
  );
}

export default App;
