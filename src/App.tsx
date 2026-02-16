import "./App.css";
import HomePage from "./pages/home/HomePage";
import Learn from "./pages/learn/Learn";
import Assessment from "./pages/assessment/Assessment";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/learn" element={<Learn />}/>
        <Route path="/assessment" element={<Assessment />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;