import './App.css';
import Footer from './component/footer/Footer';
import Navbar from './component/navbar/Navbar';
import Secfour from './component/secfour/Secfour';
import Secone from './component/secone/Secone';
import Secthree from './component/secthree/Secthree';
import Sectwo from './component/sectwo/Sectwo';

function App() {
  return (
    <div>
      <Navbar/>
      <Secone/>
      <Sectwo/>
      <Secthree/>
      <Secfour/>
      <Footer/>
    </div>
  );
} 

export default App;
