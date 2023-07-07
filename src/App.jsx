import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './page/Home/Home'
import SignIn from './page/SignIn/SignIn'

function App() {

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
   
  );
}

export default App;
