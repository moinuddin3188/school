import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Style/Style.scss';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Header/Navbar/Navbar';
import Message from './Components/Message/Message';
import History from './Components/History/History';
import Scroll from './Components/Scroll/Scroll';
import Administration from './Components/Administration/Administration';
import Committee from './Components/Administration/Committee/Committee';
import Campus from './Components/Administration/Campus/Campus';
import CampusMain from './Components/Administration/Campus/CampusMain/CampusMain';
import ClassHome from './Components/Academic/ClassHome/ClassHome';
import ClassTeacher from './Components/Academic/ClassTeacher/ClassTeacher';
import Students from './Components/Academic/Students/Students';
import Syllabus from './Components/Academic/Syllabus/Syllabus';
import Routine from './Components/Academic/Routine/Routine';
import Books from './Components/Academic/Books/Books';
import PhotoGallery from './Components/Academic/PhotoGallery/PhotoGallery';
import ClassContact from './Components/Academic/ClassContact/ClassContact';
import Notice from './Components/Notice/Notice';

function App() {
  return (
    <div>
      <Navbar />
      <Notice />
      <Scroll showBelow={250} />
    </div>
  );
}

export default App;
