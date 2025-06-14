import { Home } from "./pages/Home.jsx"
import { NotFound } from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../i18n';

function App() {
  return (
    <>
      <BrowserRouter basename="/Portifolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App