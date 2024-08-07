// import logo from "./logo.svg";
// import "./App.css";
import "./styles.css";

import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import AuthProvider from "./providers/AuthProvider";
import AllRoutes from "./routing/AllRoutes";

function App() {
  return (
    <div>
      <AuthProvider>
        <AllRoutes />
      </AuthProvider>
      <Footer />
    </div>
  );
}

export default App;
