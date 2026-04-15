import AddGuest from "./features/guests/AddGuest/AddGuest.jsx";
import "./App.css";
import Navbar from "./layouts/Navbar/Navbar.jsx";
import Footer from "./layouts/Footer/Footer.jsx";
import FetchGuest from "./features/guests/FetchGuest/FetchGuest.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <AddGuest />

      <FetchGuest />

      <Footer />
    </div>
  );
}

export default App;
