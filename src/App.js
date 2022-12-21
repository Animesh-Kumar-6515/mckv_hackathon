import './App.css';
import FooterBottom from './Components/Footer/FooterBottom';
import FooterTop from './Components/Footer/FooterTop';
import Header from './Components/Header/Header'
function App() {
  return (
    <div className="App">
      <Header />
      <FooterTop/>
      <FooterBottom />
    </div>
  );
}

export default App;
