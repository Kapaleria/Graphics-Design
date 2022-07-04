import logo from './logo.svg';
import './App.css';


function Welcome(props){
  return(
    <div className='student1'>
    <p>Welcome, {props.name}</p>
  </div>
  );
  
}

function App() {
  return (
    <div><Welcome name ="Irene"/></div>

    
    

    /**
     * <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>**/


  );
}

export default App;
