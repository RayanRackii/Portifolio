import Home from "./pages/Home.jsx" // ✅ Com extensão
import { NotFound } from "./pages/NotFound"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import '../i18n';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
