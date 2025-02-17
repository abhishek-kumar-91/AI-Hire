import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoute"; // Assuming this is your authentication guard
import DashboardPage from "./Pages/Dashboard/DashboardPage";
import JobPage from "./Pages/Job/JobPage";
import JobDetailsPage from "./Pages/JobDetailsPage/JobDetailsPage";
import HRExtractionPage from "./Pages/HRExtraction/HRExtractionPage";
import EmailOutreachPage from "./Pages/AutoReach/EmailOutreachPage";
import ApplicationPage from "./Pages/ApplicationPage/ApplicationPage";
import ResumeAnalyzePage from "./Pages/ResumeAnalyze/ResumeAnalyzePage";
import SettingPage from "./Pages/Setting/SettingPage";
import LandingPage from "./LandingPage/LandingPage";
import AuthPage from "./Pages/AuthPage/AuthPage"
import DashboardContent from "./Components/DashboardContent";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<AuthPage type="signin" />} />
        <Route path="/signup" element={<AuthPage type="signup" />} />
        
        {/* Protected Route - Dashboard and its pages */}
        <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="" element={<DashboardContent />} >
          <Route path="jobs" element={<JobPage />} />
          <Route path="details-page" element={<JobDetailsPage />} />
          <Route path="hr" element={<HRExtractionPage />} />
          <Route path="email-outreach" element={<EmailOutreachPage />} />
          <Route path="applications" element={<ApplicationPage />} />
          <Route path="resume-analyze" element={<ResumeAnalyzePage />} />
          <Route path="setting" element={<SettingPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
