import Sidecont from './sidecont/Sidecont';
import './App.css';
import Productimg from './img/Productimg';
import Nav from './nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className='row'>
        <div className='col'>
        <Productimg/>
        </div>
        <div className='col'>
        <Sidecont/>
        </div>
     
      </div>
     
    </div>
  );
}

export default App;
