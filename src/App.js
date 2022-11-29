import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Hero/Home";
import Navbar from "./Components/Navbar/Navbar";
import Newslater from "./Components/Newslater/Newslater";
import Sponser from "./Components/Sponser/Sponser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Newslater />
      <Sponser />
      <Footer />
    </div>
  );
}

export default App;
