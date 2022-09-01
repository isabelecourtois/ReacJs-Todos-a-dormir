import './App.css';
import Header from './components/Header';
import ItemListContainer from "./components/ItemListContainer";
import Titulo from './components/Titulo';

function App() {
  const lista = ["0-6 meses", "6-12 meses", "12-24 meses"];
  const items = lista.map(items => (
    <ItemListContainer valor={items} />
  ));


  return (
    <div className='container'>
      {<Header />}
      <hr></hr>
      <main>
        {<Titulo valor="Nuestros Cursos" />}
        {<ul className="list-inline">
          {items}
        </ul>}
      </main>
    </div>
  );
}


export default App;
