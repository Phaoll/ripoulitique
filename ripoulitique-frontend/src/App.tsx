import { Routes, Route } from "react-router-dom";
import MainNavBar from "./components/custom/navbar";
import HomePage from "./pages/home.page";
import SearchPage from "./pages/search.page";
import PoliticProfilePage from "./pages/politicProfile.page";
import ContactPage from "./pages/contact.page";

// TODO
// Contact page

function App() {
  return (
    <div className="min-h-screen bg-background">
      <MainNavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/:politicId" element={<PoliticProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
