// import './App.css'
//import Home from "./components/Home"
import SigninPage from "pages/Signup";
import LoginPage from "pages/LoginPage";
import Home from "pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/login" element={<LoginPage/>}/>
          <Route exact path="/signup" element={<SigninPage/>}/>
          <Route exact path="/" element={<Home/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;