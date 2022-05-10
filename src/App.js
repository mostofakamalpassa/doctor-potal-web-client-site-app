import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Review from './Pages/Review/Review';
import Login from './Pages/Login/Login';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/appointment' element={<Appointment></Appointment>}></Route>
          <Route path='/review' element={<Review></Review>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Home></Home>
    </div>
  );
}

export default App;
