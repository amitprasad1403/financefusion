import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';  
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Services from './components/Services'
// import Team from './components/Team';
import ApplyForm from './components/ApplyForm';
import Login from './components/Login';
import Profile from './components/Profile';
import ApplicationTracking from './components/ApplicationTracking';
import Register from './components/Register';

function App() {
  return (
    // <div className="App">
    //    <h1>Finance Fusion</h1>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/services' element={<Services />} />
        {/* <Route exact path='/team' element={<Team />} /> */}
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route exact path='/applications' element={<ApplicationTracking />} />
        <Route exact path='/apply' element={<ApplyForm />} />
        <Route exact path='/apply' element={<ApplyForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
