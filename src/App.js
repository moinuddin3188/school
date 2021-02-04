import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Style/Style.scss';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Header/Navbar/Navbar';
import Message from './Components/Message/Message';
import History from './Components/History/History';
import Scroll from './Components/Scroll/Scroll';
import Administration from './Components/Administration/Administration';

function App() {
  return (
    <div>
      <Navbar />
      <Administration />
      <Scroll showBelow={250} />
    </div>
  );
}

export default App;
