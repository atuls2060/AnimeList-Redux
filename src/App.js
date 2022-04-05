import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import AnimeDetails from "./components/AnimeDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/search/:keyword" element={<HomeScreen />} />
        <Route path="/films/:id" element={<AnimeDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
