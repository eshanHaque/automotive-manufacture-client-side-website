import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Products from './Pages/Products/Products';
import Login from './Pages/Log/Login/Login';
import SignUp from './Pages/Log/Login/SignUp';
import RequireAuth from './Pages/Log/RequireAuth/RequireAuth';
import Myorder from './Pages/Myorder/Myorder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Products" element={<RequireAuth>
          <Products />
        </RequireAuth>} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myorder" element={<Myorder />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
