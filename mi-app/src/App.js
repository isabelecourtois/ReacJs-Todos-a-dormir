import './App.css';
import Header from './components/Header';
import ItemListContainer from "./components/ItemListContainer";
import Titulo from './components/Titulo';
import ItemCount from "./components/ItemCount";

function App() {


  return (
    <div className='container'>
      {<Header />}
      <hr></hr>
      <main className="main-index">
        {<Titulo valor="Nuestros Cursos" />}
        <hr />
        <ItemListContainer />
        <ItemCount stock={200} initial={1} onAdd={0} />
      </main>
    </div>
  );
}


export default App;
