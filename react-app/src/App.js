import Signup from "./components/authentication/Signup";
import Login from "./components/authentication/Login";
import Dashboard from "./components/authentication/Dashboard";
import ForgotPassword from "./components/authentication/ForgotPassword";
import { useEffect } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Main from "./components/Main";
import LandingPage from "./components/landing-page/LandingPage";
import axios from "axios";

function App() {
  const history = useHistory();

  const tokenInterval = setInterval(async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    console.log("Token expired, getting a new access token");
    const newAccessToken = await axios.post("http://localhost:8000/token", {
      token: refreshToken,
    });
    localStorage.setItem("accessToken", newAccessToken);
  }, 600000);

  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Signup} />
            <Route path="/main" component={Main} />

            {/* Auth Routes */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
