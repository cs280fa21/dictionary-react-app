import Definitions from "./components/Definitions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Phonetics from "./components/Phonetics";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Phonetics />
      <Definitions />
      <Footer />
    </>
  );
}

export default App;
