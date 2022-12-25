import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import Hotel from './Components/Hotel/Hotel';
import FaturesCardParent from './Components/Hotel/FaturesCardParent';
import ImageSlider from './Components/ImageSlider/ImageSlider';
function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider/>
      <Hotel />
      <FaturesCardParent/>
      <Footer />
    </div>
  );
}

export default App;
