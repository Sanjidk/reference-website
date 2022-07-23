import './App.css';
import Introduction from './components/Main/Introduction';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
