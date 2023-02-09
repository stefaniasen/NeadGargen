import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Gracias por elegir Nead Garden para equipar tu jardín!" />
    </>
  );
};

export default App;
