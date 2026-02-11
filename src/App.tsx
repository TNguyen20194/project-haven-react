import './App.css'
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <HomePage />
      <Footer />
    </BrowserRouter>

  )
}

export default App
