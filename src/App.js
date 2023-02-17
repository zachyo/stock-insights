import "./App.css";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/homepage/homepage.component";
import { SearchProvider } from "./contexts/searchContext";

function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </SearchProvider>
    </div>
  );
}

export default App;
