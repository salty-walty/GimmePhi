import './App.css';
import Calculator from './Calculator'

function App() {
  return (
    <div className="App">
      <h1>Welcome to Gimme Phi!</h1>
      <p>
        Type a number in either box below to see it's porpotional value according to the Golden Ratio.
        Entering a number in the lefthand box will change the box to the right to it's smaller porpotional value.
        Entering a number in the righthand box will change the box to the left it's larger porpotional value. 
      </p>
      <Calculator />
    </div>
  );
}

export default App;
