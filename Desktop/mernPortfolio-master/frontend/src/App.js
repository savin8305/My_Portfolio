import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About1/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Project from "./components/Admin/Project";
import Loader from "./components/Loader/Loader";
import portimg from "./Images/14.webp"
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout duration as needed
  }, []);
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          {isLoading ? (


            <div className="loading-interface">

              <img src={portimg} alt="" />

            </div>
          ) : (
            <> <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Home
                      youtubes={user.youtube}
                      timelines={user.timeline}
                      skills={user.skills}
                      projects={user.projects}
                      about={user.about}
                    />
                  }
                />
                <Route path="/about" element={<About about={user.about} timelines={user.timeline}
                />} />

                <Route
                  path="/projects"
                  element={<Projects projects={user.projects} />}
                />
                <Route path="/contact" element={<Contact />} />
                <Route
                  path="/account"
                  element={isAuthenticated ? <AdminPanel /> : <Login />}
                />
                <Route
                  path="/admin/timeline"
                  element={isAuthenticated ? <Timeline /> : <Login />}
                />
                <Route
                  path="/admin/youtube"
                  element={isAuthenticated ? <Youtube /> : <Login />}
                />

                <Route
                  path="/admin/project"
                  element={isAuthenticated ? <Project /> : <Login />}
                />
              </Routes>
              <Footer /></>
          )}
        </>
      )}
    </Router>
  );
}

export default App;
