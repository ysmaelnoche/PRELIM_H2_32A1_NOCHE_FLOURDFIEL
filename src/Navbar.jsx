import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Flourdfiel's Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#aboutme"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Me
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#education">
                    Education
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#skills">
                    Skills
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section id="home" className="py-5 text-center">
      <div className="container">
        <h1>WELCOME TO MY PORTFOLIO</h1>
        <p>A short portfolio of Flourdfiel Ysmael Noche using ReactJS.</p>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="aboutme" className="py-5 bg-light">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a 21 year-old BSIT student. I live in Parañaque City. Ever since
          I was a kid I grew up with a lot of computers around me, that's why I
          took this course and take this chance to expand my knowledge. I am new
          to React Framework but this is definitely worth a try.
        </p>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-5">
      <div className="container">
        <h3>Education</h3>
        <p>
          <ul>
            <li>Elementary - Saint Helena School</li>
            <li>
              High School - Saint Francis Of Assisi College - Taguig Campus
            </li>
            <li>
              Senior High School - Saint Francis Of Assisi College - Taguig
              Campus{" "}
            </li>
            <li> College - Lyceum Of Alabang (Current) </li>
          </ul>
        </p>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h3>Skills</h3>
        <p>
          <ul>
            <li>Fast Learner</li>
            <li>Competitive</li>
            <li>
              Experienced in Java, C++, Python, VB .NET, Web Developing
              Programming Languages
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2>Projects</h2>
        <p>
          <ul>
            <li>
              Calculator with Temperature and Currency Converter using Java
            </li>
            <li>Quiz App Game using Android Studio</li>
            <li>Asset Management System using VB .NET</li>
            <li>Event Management System using HTML, CSS, JAVASCRIPT, PHP</li>
          </ul>
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
            ysmaelnoche02@gmail.com
          </a>
          <br />
          Facebook:{" "}
          <a href="https://www.facebook.com/MaelPanget">Ysmael Noche</a>
          <br />
          Contact No. : 09690493331
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Flourdfiel's Portfolio. All rights reserved.</p>
      <a href="https://github.com">GitHub</a>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
