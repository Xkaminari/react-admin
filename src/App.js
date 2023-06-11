import { ThemeProvider } from "./ThemeContext";
import Analytics from "./sceans/Analytics/Analytics";
import Sidebar from "./sceans/global/Sidebar";
import Topbar from "./sceans/global/Topbar";
import { Routes, Route } from "react-router-dom";
import "./index.css"

function App() {
  return (
    <ThemeProvider>
      <Topbar />
      <Sidebar />
      <div className="section_content">
        <Routes>
          <Route path="/" element={<Analytics/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
