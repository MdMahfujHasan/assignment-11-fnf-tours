import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Tours from './Components/Tours/Tours';
import Booking from './Components/Bookings/Booking';
import Shop from './Components/Shop/Shop';
import Blogs from './Components/Blogs/Blogs';
import Gallery from './Components/Gallery/Gallery';
import NotFound from './Components/NotFound/NotFound';
import FrontCover from './Components/FrontCover/FrontCover';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<FrontCover />}></Route>
          <Route path="/header" element={<Header />}></Route>
          <Route path="/tours" element={<Tours />}></Route>
          <Route path="/booking" element={<Booking />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
