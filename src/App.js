
import './App.css';
import Vip from './Form';
import Banner from './Banner';
import About from'./About';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <div className="App">
      <div className="row">
      
     <Banner/>
      
      <About/>
      <Vip/>
      <Footer/>
      </div>
      </div>
    </div>
  );
}

export default App;
