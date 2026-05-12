import "./App.css";
import HomePage from "./pages/home/HomePage";
import AboutSection from "./pages/about/About";
import Learn from "./pages/learn/Learn";
import Assessment from "./pages/assessment/Assessment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/MainLayout";
import AssessmentLayout from "./components/layout/AssessmentLayout";
import AssessmentResult from "./pages/assessment/AssessmentResults";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";
import BookTherapist from "./pages/book/BookTherapist";
import { AssessmentEntryProvider } from "./hooks/AssessmentEntryContext";

function App() {
  return (
    <BrowserRouter>
    <AssessmentEntryProvider>
     <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/learn" element={<Learn />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/book" element={<BookTherapist />}/>
          {/* Add "About me" page for the therapist */}
        </Route>

        <Route element={<AssessmentLayout />}>
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment/results" element={<AssessmentResult />} />
        </Route>
      </Routes>
      </AssessmentEntryProvider>
    </BrowserRouter>
  );
}

export default App;
