import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPortfolio from "./MainPortfolio";
import ProjectDetail from "./pages/ProjectDetails";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
} 