import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/NavBar/Header';
import ItemListContainer from "./components/Container/ItemListContainer";
import Titulo from './components/Titulo';
import ItemDetailContainer from "./components/Container/ItemDetailContainer";
import Index from './components/Index';

function App() {


  return (
    <div className='container'>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route exact path="/cursos" element={<ItemListContainer />} />
          <Route exact path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      <hr></hr>
      <main className="main-index">
        {<Titulo valor="Nuestros Cursos" />}
        <hr />
        <ItemListContainer />
        <ItemDetailContainer />
      </main>
    </div>
  );
}


export default App;
