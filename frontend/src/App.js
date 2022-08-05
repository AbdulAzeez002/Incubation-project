import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
// import Register from './pages/Register';
import Header from './components/Header';
// import AdminHome from './pages/AdminHome';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminHome from './pages/AdminHome';
import Register from './pages/Register';
import IncubationForm from './pages/IncubationForm';
import AdminHeader from './components/AdminHeader';
import TrackApplication from './pages/TrackApplication';
import ViewApplication from './pages/ViewApplication';
import BookingSlots from './pages/BookingSlots';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import EditUser from './pages/EditUser';



function App() {
  return (
    <>
    <Router>
      <Header/>
    <div className='containers' >
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/admin' element={<AdminHome/>} />
        <Route path='/bookSlot' element={<IncubationForm/>} />
        
        </Routes>
      
      </div>
      <Routes>
      <Route path='/admin/track' element={<TrackApplication/>} />
      <Route path='/viewApplication' element={<ViewApplication/>} />
      <Route path='/admin/bookSlot' element={<BookingSlots/>} />
      </Routes>
        


      
    </Router>
    <ToastContainer/>
    

    </>
  );
}

export default App;
