import "./App.css";
import HomePage from "./pages/home/HomePage";
import Learn from "./pages/learn/Learn";
import Assessment from "./pages/assessment/Assessment";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/layout/MainLayout";
import AssessmentLayout from "./components/layout/AssessmentLayout";
import AssessmentResult from "./pages/assessment/AssessmentResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/learn" element={<Learn />} />
        </Route>

        <Route element={<AssessmentLayout />}>
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment/result" element={<AssessmentResult />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
