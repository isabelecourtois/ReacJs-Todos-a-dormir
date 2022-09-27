import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/NavBar/Header';
import Index from './components/Index';
import Titulo from './components/Titulo';
import ItemListContainer from "./components/Container/ItemListContainer";
import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import Quiensoy from './components/Quiensoy';
import Blog from './components/Blog'
import Contacto from './components/Contacto';
import Provider from './components/Context/Context';
import Cart from './components/Item/Cart'; 

function App() {

  return (

    <Provider>
      <BrowserRouter>
        <Header />
        {<Titulo valor="Todos a Dormir" />}
        <hr />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/cursos" element={<ItemListContainer />} />
          <Route exact path="/categoria/:tipo" element={<ItemListContainer />} />
          <Route exact path="/cursos/:id" element={<ItemDetailContainer />} />
          <Route exact path="/quiensoy" element={<Quiensoy />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/carrito" element={<Cart />} />
{/*           <Route exact path="/cart" element={<Cart />} /> */}
        </Routes>
      </BrowserRouter>
      <hr></hr>
    </Provider>
  );
}


export default App;
