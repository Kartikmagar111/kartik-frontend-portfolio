import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import About from "./Component/About";
import ContactUs from "./Component/ContactUs";
import Home from "./Component/Home";
import Project from "./Component/Project";
import Login from "./Component/Login";
 


function App() {
  const [theme, setTheme] = useState("text-danger");

  return (
    <BrowserRouter>
      {/* FULL HEIGHT FLEX WRAPPER */}
      <div className="container-fluid px-0 min-vh-100 d-flex flex-column">
        {/* HEADER */}
        <nav className="navbar navbar-expand-lg navbar-light bg-primary-subtle px-4 flex-shrink-0">
          <Link className="navbar-brand fw-bold text-danger fs-3" to="/">
            Kartik
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link fs-5 text-primary" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-primary" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-primary" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fs-5 text-primary" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* SCROLLABLE CONTENT */}
        <main className="">
          <div className="container my-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/project" element={<Project />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="*"
                element={
                  <div className="text-center mt-5">
                    <h4 className="text-danger">404 Not Found</h4>
                    <code className="text-warning">
                      The requested path was not found
                    </code>
                  </div>
                }
              />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
