import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Products from './Pages/Products/Products';
import Login from './Pages/Log/Login/Login';
import SignUp from './Pages/Log/Login/SignUp';
import RequireAuth from './Pages/Log/RequireAuth/RequireAuth';
import Myorder from './Pages/Myorder/Myorder';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Myreview from './Pages/Myreview/Myreview';

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
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<Myorder></Myorder>}></Route>
          <Route path="myreview" element={<Myreview></Myreview>}></Route>
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
