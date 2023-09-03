import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";
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
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
