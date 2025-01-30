import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage/login";
import RegisterPage from "./component/LoginPage/RegisterPage";
import AdminLogin from "./component/LoginPage/AdminLogin";
import AdminRegister from "./component/LoginPage/AdminRegister";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-register" element={<AdminRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
