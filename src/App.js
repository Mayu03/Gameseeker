import react from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Searchbox from "./components/Searchbox";
import Button from "./components/Button";
// import Gamedata from "./csvjson.json";
function App() {
  return (
    <>
      <Navbar />
      <Button />
      <Searchbox />
    </>
  );
}

export default App;
