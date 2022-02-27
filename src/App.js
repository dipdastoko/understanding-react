import './App.css';
import Device from './components/Device/Device';
import { useEffect, useState } from 'react';
import Books from './components/Books/Books';

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    { name: 'small giants', author: 'bo' },
    { name: 'build to sell', author: 'john' },
    { name: 'grind it', author: 'Ray' },
    { name: 'shoe dog', author: 'bo' }
  ];

  const handleIncreasedSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }
  useEffect(() => {
    console.log(steps);
  }, [steps])
  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncreasedSteps}>Walk</button>
      <Device name="phone" steps={steps} price="12000" />
      <Books books={books} />
    </div>
  );
}

export default App;
