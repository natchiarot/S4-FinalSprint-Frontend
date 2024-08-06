// import logo from "./logo.svg";
// import "./App.css";
import "./styles.css";

import Header from "./components/Header";
import FrontPage from "./components/FrontPage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/SigninPage";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import ResultsPage from "./components/ResultsPage";
import ResumeView from "./components/ResumeView";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<FrontPage />} />
          <Route path="/users/signIn" element={<SigninPage />} />
          <Route path="/users/signUp" element={<SignupPage />} />
          <Route path="/users/signOut" element={<FrontPage />} />
          <Route path="/users/search" element={<SearchPage />} />
          <Route path="/users/searchResults" element={<ResultsPage />} />
          <Route path="/users/resumeView" element={<ResumeView />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
