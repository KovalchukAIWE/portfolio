import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Skills />
      <Work />
    </>
  );
}

export default App;
