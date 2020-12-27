import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Gimme Phi!</h1>
      <p>
        Drop a number in the field below and see it's corresponding value when multiplied by Phi.
      </p>
      <Calculator />
    </div>
  );
}

export default App;
