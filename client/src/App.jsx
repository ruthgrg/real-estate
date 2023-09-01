import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import "./app.css"

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>   
      <Companies/>
      <Residencies/>
    </div>
  );
}

export default App;
