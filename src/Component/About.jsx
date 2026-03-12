import { useState, useRef } from "react";

function About() {
  const [button, setButton] = useState("Download Resume");
  const [pValue, setPvalue] = useState(0);
  const [toggleButton, setToggleButton] = useState("d-none");

  const thread = useRef(null);
  const progressValue = useRef(0);
  let count = 0;

  function StartProgress() {
    count++;
    progressValue.current = count;
    setPvalue(count);

    if (count === 100) {
      clearInterval(thread.current);
      setToggleButton("d-none");
      setButton("Downloaded");
      window.open("/resume.pdf", "_blank");
    }
  }

  function handleLoad(e) {
    if (e.target.value === "Download Resume") {
      count = 0;
      progressValue.current = 0;
      thread.current = setInterval(StartProgress, 50);
      setToggleButton("d-block");
      setButton("Downloading...");
    }
  }

  return (
    <div className="container my-5">

      {/* ABOUT CARDS */}
      <div className="row g-4 justify-content-center">

        <div className="col-12 col-md-6 col-lg-5">
          <div className="card shadow-sm h-100 text-center border-primary">
            <div className="card-body">
              <h5 className="text-danger">Frontend Developer</h5>
              <p className="text-muted">
                I am a passionate web developer who designs smart,
                interactive web pages and websites to give users a
                smooth experience.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-5">
          <div className="card shadow-sm h-100 text-center border-success">
            <div className="card-body">
              <h5 className="text-warning">React Developer</h5>
              <p className="text-info">
                I’m a React developer with a strong JavaScript foundation.
                I build high-performance, reusable, user-centric web apps
                with clean code.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* DOWNLOAD SECTION */}
      <div className="text-center mt-5">
        <button
          className="btn btn-danger px-4"
          value={button}
          onClick={handleLoad}
          disabled={button === "Downloading..."}
        >
          {button}
        </button>

        <div className={`mt-3 ${toggleButton}`}>
          <progress
            min="0"
            max="100"
            value={progressValue.current}
            className="w-50"
          ></progress>
          <div className="mt-2 text-muted">
            Downloading: {pValue}%
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
