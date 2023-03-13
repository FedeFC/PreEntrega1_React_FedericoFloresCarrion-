import './App.css';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';


function App() {

  return (
    
    <div className='App'>
      <Navbar/>
      <ItemListContainer greeting="Aca va incluida la lista"/>

    </div>
    )
  }

export default App
