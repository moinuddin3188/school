import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './Style/Style.scss';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
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
import Admission from './Components/Admission/Admission';
import Profile from './Components/Profile/Profile';
import store from './Redux/Store/Store';
import Event from './Components/Event/Event';
import Result from './Components/Result/Result';
import Dashboard from './Components/Dashboard/Dashboard';
import AtaGlance from './Components/AtaGlance/AtaGlance';
import Infrastructure from './Components/Infrastructure/Infrastructure';
import Achievements from './Components/Achievements/Achievements';
import AchievementDetails from './Components/Achievements/AchievementDetails/AchievementDetails';
import AdmissionForm from './Components/Admission/AdmissionForm/AdmissionForm';
import AdmissionResult from './Components/Admission/AdmissionResult/AdmissionResult';
import Fees from './Components/Admission/Fees/Fees';
import Tour from './Components/CoCurriculam/Tour/Tour';
import Sport from './Components/CoCurriculam/Sport/Sport';
import DebatingClub from './Components/Facilities/DebatingClub/DebatingClub';
import ScienceClub from './Components/Facilities/ScienceClub/ScienceClub';
import CulturalClub from './Components/Facilities/CulturalClub/CulturalClub';
import Canteen from './Components/Facilities/Canteen/Canteen';
import Library from './Components/Facilities/Library/Library';
import Hostel from './Components/Facilities/Hostel/Hostel';


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
        <Route path="/at-a-glance">
          <AtaGlance />
        </Route>
        <Route path="/infrastructure">
          <Infrastructure />
        </Route>
        <Route path="/achievements">
          <Achievements />
        </Route>
        <Route path="/achievement-details">
          <AchievementDetails />
        </Route>
        <Route path="/result">
          <Result />
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
        <Route path="/event">
          <Event />
        </Route>
        <Route path="/admission">
          <Admission />
        </Route>
        <Route path="/admission-form">
          <AdmissionForm />
        </Route>
        <Route path="/admission-result">
          <AdmissionResult />
        </Route>
        <Route path="/admission-fees">
          <Fees />
        </Route>
        <Route path="/tour">
          <Tour />
        </Route>
        <Route path="/sport">
          <Sport />
        </Route>
        <Route path="/hostel">
          <Hostel />
        </Route>
        <Route path="/debating-club">
          <DebatingClub />
        </Route>
        <Route path="/science-club">
          <ScienceClub />
        </Route>
        <Route path="/cultural-club">
          <CulturalClub />
        </Route>
        <Route path="/canteen">
          <Canteen />
        </Route>
        <Route path="/library">
          <Library />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Scroll showBelow={250} />
      </Router>
    </Provider>
  );
}

export default App;
