import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Companies from "./components/companies/Companies";
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
    </div>
  );
}

export default App;
