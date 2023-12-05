import Home from "./pages/Home";
import AboutUs from "./components/About-us/AboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Courses from "./components/Courses-section/Courses";
import FreeCourse from "./components/Free-course-section/FreeCourse";
import Company from "./components/Company-section/Company";
import CoursesScreen from "./pages/CoursesScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/course-section"
            element={<CoursesScreen></CoursesScreen>}
          />
          <Route
            path="/ders-notları"
            element={<Company></Company>}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
