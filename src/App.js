import './App.css';
import Introduction from './components/Main/Introduction';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="max-w-5xl mx-auto px-5 text-white">
      <Navbar></Navbar>
      <Introduction></Introduction>
    </div>
  );
}

export default App;
