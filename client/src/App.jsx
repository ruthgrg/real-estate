import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import "./app.css"

function App() {
  return (
    <div className="app">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>   
    </div>
  );
}

export default App;
