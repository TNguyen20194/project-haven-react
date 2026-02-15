import "./App.css";
import HomePage from "./pages/home/HomePage";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HomePage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
