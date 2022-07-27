import './App.css';
import About from './components/Main/About';
import Categories from './components/Main/Categories';
import Introduction from './components/Main/Introduction';
import Photography from './components/Main/Photography';
import Skill from './components/Main/Skill';
import Tools from './components/Main/Tools';
import Navbar from './components/Shared/Navbar';

function App() {
  return (
    <div className="text-white">
      <Navbar></Navbar>
      <Introduction></Introduction>
      <Skill></Skill>
      <Categories></Categories>
      <Photography></Photography>
      <Tools></Tools>
      <About></About>
    </div>
  );
}

export default App;
