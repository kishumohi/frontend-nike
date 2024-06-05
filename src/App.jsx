import "./App.css";
import Hero from "./components/Hero.jsx";
import NavBar from "./components/NavBar.jsx";
import NewHero from "./components/NewHero.jsx";

function App() {
  return (
    <>
      <div className="font-Poppins">
        <NavBar />
        {/* <Hero /> */}
        <NewHero />
      </div>
    </>
  );
}

export default App;
