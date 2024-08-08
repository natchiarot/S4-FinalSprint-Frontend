// import logo from "./logo.svg";
// import "./App.css";
import "./styles.css";

import Footer from "./components/Footer";

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
