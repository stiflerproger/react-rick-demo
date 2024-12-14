import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CharactersPage from "./components/Pages/CharactersPage.jsx";
import LocationsPage from "./components/Pages/LocationsPage.jsx";
import EpisodesPage from "./components/Pages/EpisodesPage.jsx";
import IndexPage from "./components/Pages/Index.jsx";

import './App.css'
import Header from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="*" element={<IndexPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
