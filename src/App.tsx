import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import "./index.css";
import FeaturePage from "./components/Feature";
import BlogPage from "./components/BlogPage";
import WhyEcoMattersPage from "./components/EcoMatters";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features/:featureId" element={<FeaturePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/eco" element={<WhyEcoMattersPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;