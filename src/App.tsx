import './App.css'
import HomePage from "./pages/Homepage"
import Header from "./components/Header"
import Footer from "./components/Footer"
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
