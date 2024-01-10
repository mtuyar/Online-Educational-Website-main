import Home from "./pages/Home";
import AboutUs from "./pages/About-Us/About-us";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Company from "./components/Company-section/Company";
import CoursesScreen from "./pages/CoursesScreen";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import AdminHome from "./pages/home/Home";
import Product from "./pages/product/Product";
import NewUser from "./pages/newUser/NewUser";
import NewProduct from "./pages/newProduct/NewProduct";
import ProductList from "./pages/productList/ProductList";
import Login from "./pages/login/Login";
import SignInForm from "./pages/login/SignIn";
import SignUpForm from "./pages/login/SignUp";
import LessonNotes from "./pages/LessonNotes/LessonNotes";

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
            path="/courses-section"
            element={<CoursesScreen></CoursesScreen>}
          />
          <Route
            path="/ders-notları"
            element={<LessonNotes></LessonNotes>}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
          <Route path="/admin-panel2"
            element={<AdminHome></AdminHome>}
          />
          <Route path="/users"
            element={<UserList></UserList>}
          />
          <Route path="/user/:userId"
            element={<User />}
          />
          <Route path="/newUser"
            element={<NewUser />}
          />
          <Route path="/products"
            element={<ProductList></ProductList>}
          />
          <Route path="/product/:productId"
            element={<Product />}
          />
          <Route path="/newproduct"
            element={<NewProduct />}
          />
          <Route path="/login-page"
            element={<Login />}
          />
          <Route path="/sign-in"
            element={<SignInForm />}
          />
          <Route path="/sign-up"
            element={<SignUpForm />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
