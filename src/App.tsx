import './App.css'
import HomePage from "./pages/HomePage";
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
