import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { CountryDetail } from "./pages/CountryDetail";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-app-bg text-app-text transition-colors duration-300">
        <NavBar />
        <main className="px-4 py-8 md:px-20">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/country/:id" element={<CountryDetail/>}/>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;