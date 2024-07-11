import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Country from "./pages/Country";
import Individual from "./pages/Individual";
import Footer from "./pages/Footer";

function App() {
  const [Loggedin, setLoggedin] = useState(false);

  useEffect(() => {

    const userLoggedIn = localStorage.getItem('loggedIn') === 'true';
    setLoggedin(userLoggedIn);
  }, []);

  const handleLogin = () => {
    setLoggedin(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedin(false);
    localStorage.removeItem('loggedIn');
  };

  return (
    <div className="flex flex-col w-screen h-full min-h-screen bg-blue-900">
      <Navbar Loggedin={Loggedin} setLoggedin={setLoggedin} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home Loggedin={Loggedin} setLoggedin={setLoggedin} />} />
        <Route path="country" element={<Country />} />
        <Route path="individual" element={<Individual />} />
        <Route path="login" element={<Login setLoggedin={handleLogin} />} />
        <Route path="signup" element={<Signup setLoggedin={handleLogin} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
