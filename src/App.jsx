import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "./Pages/AuthPage/AuthPage";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/signin" element={<AuthPage type="signin" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
      </Routes>
    </Router>
  );
}

export default App;

