import './App.css';
import Introduction from './components/Main/Introduction';
import Skill from './components/Main/Skill';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="max-w-5xl mx-auto px-5 text-white">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Skill></Skill>
    </div>
  );
}

export default App;
