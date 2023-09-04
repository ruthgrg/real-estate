import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import Companies from "../components/companies/Companies";
import Residencies from "../components/residencies/Residencies";
import Value from "../components/value/Value";
import Contact from "../components/contact/Contact";
import GetStarted from "../components/getStarted/GetStarted";
import Footer from "../components/footer/Footer";

const Website = () => {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Hero/>
      </div>   
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
    </div>
  )
}

export default Website