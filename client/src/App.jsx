import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/destinations" element={<DestinationPage />} />
      </Routes>
    </div>
  );
}

export default App;
