import "./App.css";
import FaturesCardParent from "./Components/Feature/FaturesCardParent";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hotel from "./Components/Hotel/Hotel";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Join from "./Components/Join/Join";
// import Test from './Components/Test/Test';
function App() {
  return (
    <div className="App">
      <Header />
      <ImageSlider />
      <Hotel />
      {/* <Test/> */}
      <FaturesCardParent />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
