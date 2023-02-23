import { BrowserRouter , Routes , Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

const App = () => {
  return (
     <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/productos" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exacr path="/carrito" element={<Cart/>}/>

      <ItemListContainer greeting="¡Gracias por elegir Neat Garden para equipar tu jardín!" />
    
      </Routes> 
     </BrowserRouter> 
  );
};

export default App;
