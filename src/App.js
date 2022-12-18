import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Hackathonpage from "./components/hackathons/hackathonpage";
import ProfilePage from "./components/about/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/hackathons" element={<Hackathonpage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route
            path="/chatroom"
            element={() => {
              window.location.replace = "http://127.0.0.1:5500/index.html";
              return null;
            }}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
