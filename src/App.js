import './App.css';
import Categories from './components/Main/Categories';
import Introduction from './components/Main/Introduction';
import Photography from './components/Main/Photography';
import Skill from './components/Main/Skill';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="text-white">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Skill></Skill>
      <Categories></Categories>
      <Photography></Photography>
    </div>
  );
}

export default App;
