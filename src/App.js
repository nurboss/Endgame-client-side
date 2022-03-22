import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/AboutUs/Aboutus';
import BookAppoinment from './components/Appoinment/BookAppoinment';
import Dashbord from './components/DashBord/Dashbord/Dashbord';
import AddReview from './components/DashBord/UserDashbord/AddReview';
import MyAppointment from './components/DashBord/UserDashbord/MyAppointment';
import AuthProvider from './components/Firebase/AuthProvider';
import Home from './components/Home/Home';
import OurServices from './components/Home/OurServices';
import SingleService from './components/Home/SingleService';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          
          <Route  path='/' element={<Home />} />
          <Route  path='/home' element={<Home />} />
          <Route  path='/aboutus' element={<Aboutus />}/>
          <Route  path='/login' element={<Login />}/>
          <Route  path='/services' element={<OurServices />}/>
          <Route  path='/registration' element={<Registration />}/>
          <Route  path='/services/:id' element={<PrivateRoute><SingleService /></PrivateRoute>}/>
          <Route  path='/bookappoinment/:id' element={<BookAppoinment />}/>
          
          <Route path='dashbord' element={<PrivateRoute><Dashbord /></PrivateRoute>}>

            <Route  path={`dashbord/myappointment`} element={<MyAppointment />} />
            <Route  path={`dashbord/addreview`} element={<AddReview />} />
          
          </Route>


        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
