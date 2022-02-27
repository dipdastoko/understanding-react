import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';

function App() {
  return (
    <div className="App">
      <Device name="phone" price="12000" />
    </div>
  );
}

export default App;
