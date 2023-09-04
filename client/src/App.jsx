import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css"
import Website from "./pages/Website";
import Layout from "./components/layout/Layout";
import Properties from "./pages/properties/Properties";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Website/>}/>
            <Route path="/properties" element={<Properties/>} />
          </Route>
        </Routes> 
      </Suspense>
    </BrowserRouter>
  );
}

export default App;