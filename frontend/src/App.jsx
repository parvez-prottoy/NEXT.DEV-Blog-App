import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
const App = () => {
  return (
    <Router>
      <Navigation />
      <Footer />
    </Router>
  );
};

export default App;
