import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Style/Style.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
import Contact from './Components/Contact/Contact';
import Hostel from './Components/Hostel/Hostel';
import Admission from './Components/Admission/Admission';
import Sports from './Components/Administration/Campus/Sports/Sports';
import Profile from './Components/Profile/Profile';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store/Store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/administration">
          <Administration />
        </Route>
        <Route path="/committee">
          <Committee />
        </Route>
        <Route path="/campus">
          <Campus />
        </Route>
        <Route path="/campus_details">
          <CampusMain />
        </Route>
        <Route path="/sports">
          <Sports />
        </Route>
        <Route path="/class_home/:class">
          <ClassHome />
        </Route>
        <Route path="/class_teacher">
          <ClassTeacher />
        </Route>
        <Route path="/students">
          <Students />
        </Route>
        <Route path="/syllabus">
          <Syllabus />
        </Route>
        <Route path="/class_routine">
          <Routine />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/photo_gallery">
          <PhotoGallery />
        </Route>
        <Route path="/class_contact">
          <ClassContact />
        </Route>
        <Route path="/notice">
          <Notice />
        </Route>
        <Route path="/admission">
          <Admission />
        </Route>
        <Route path="/hostel">
          <Hostel />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Scroll showBelow={250} />
      </Router>
    </Provider>
  );
}

export default App;
