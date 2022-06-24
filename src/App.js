import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aboutus from './components/AboutUs/Aboutus';
import AllServices from './components/AllServices/AllServices';
import BookAppoinment from './components/Appoinment/BookAppoinment';
import AddnewService from './components/DashBord/AdminDashbord/AddnewService';
import AllApointment from './components/DashBord/AdminDashbord/AllApointment';
import ReviewControl from './components/DashBord/AdminDashbord/ReviewControl';
import Dashbord from './components/DashBord/Dashbord/Dashbord';
import Payment from './components/DashBord/Dashbord/Payment';
import AddReview from './components/DashBord/UserDashbord/AddReview';
import MyAppointment from './components/DashBord/UserDashbord/MyAppointment';
import AuthProvider from './components/Firebase/AuthProvider';
import Home from './components/Home/Home';
import SingleService from './components/Home/SingleService';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Registration from './components/Registration/Registration';
import NotFound from './components/shared/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          
          <Route  path='/' element={<Home />} />
          <Route  path='/home' element={<Home />} />
          <Route  path='/aboutus' element={<Aboutus />}/>
          <Route  path='/login' element={<Login />}/>
          <Route  path='/services' element={<PrivateRoute><AllServices /></PrivateRoute>}/>
          <Route  path='/registration' element={<Registration />}/>
          <Route  path='/services/:id' element={<PrivateRoute><SingleService /></PrivateRoute>}/>
          <Route  path='/bookappoinment/:id' element={<BookAppoinment />}/>
          
          <Route path='/dashbord' element={<PrivateRoute><Dashbord /></PrivateRoute>}>

            <Route  path={`dashbord/myappointment`} element={<MyAppointment />} />
            <Route  path={`dashbord/addreview`} element={<AddReview />} />
            <Route  path={`dashbord/payment/:appointmentId`} element={<Payment />} />

          
            <Route  path={`dashbord/reviewcontrol`} element={<ReviewControl />} />
            <Route  path={`dashbord/allapointment`} element={<AllApointment />} />
            <Route  path={`dashbord/addnewservice`} element={<AddnewService />} />
          
          </Route>
          <Route  path='*' element={<NotFound />} />

        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
