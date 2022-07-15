import './App.css';

import NatureImage from './assets/nature.jpg'

function App() {
  return (
    <div className="App">
      <div className='P-cover-image' style={{backgroundImage:`url('${NatureImage}')`}}>
        <div className='P-information'>
          <h3>Lorem ipsum.</h3>
          <h1>Lorem ipsum dolor sit.</h1>

          <ul>
            <li> lorem</li>
            <li> lorem</li>
            <li> lorem</li>
            <li> lorem</li>
            <li> lorem</li>
          </ul>

          <button> <p>Click me</p></button>
        </div>
      </div>
    </div>
  );
}

export default App;
