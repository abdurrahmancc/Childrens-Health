import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About/About";
import Add from "./Components/Pages/Add/Add";
import Blog from "./Components/Pages/Blog/Blog";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Navber from "./Components/Pages/Navber/Navber";
import NotFound from "./Components/Pages/NotFound/NotFound";
import Register from "./Components/Pages/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <div className="App ">
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/add" element={<Add></Add>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
