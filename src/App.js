import "./App.css";
import Instructions from "./components/Instructions";
import { NavLink, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Students from "./components/Students";
import StudentDetails from "./components/StudentDetails";

const App = () => {
  return (
    <div className="App">
      <nav>
        <NavLink className="link" to="/students">
          Students
        </NavLink>
      </nav>
      <div className="block">
        <Routes>
          <Route path="/students">
            <Route index element={<Students />} />
            <Route path=":uuid" element={<StudentDetails />} />
          </Route>
        </Routes>
      </div>

      <div className="Instructions">
        <Instructions />
      </div>
    </div>
  );
};

export default App;
