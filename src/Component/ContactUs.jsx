import { useState } from "react";

function ContactUs() {
  const [place, setPlace] = useState("");
  const [letter, setLetter] = useState("Send");

  function handleFocus() {
    setPlace("Enter Name here...");
  }

  function handleBlur() {
    setPlace("");
  }

  function handleClick(e) {
    e.preventDefault();
    setLetter("Sending...");
  }

  return (
    <div className="container my-2 text-primary">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h4 className="text-center mb-3">Contact Me</h4>

          <form className="card shadow-lg bg-danger-subtle p-3">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                placeholder={place}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contact No</label>
              <input
                type="tel"
                placeholder="Enter Contact here..."
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Summary</label>
              <textarea
                rows="3"
                placeholder="Enter summary"
                className="form-control"
              ></textarea>
            </div>

            <button className="btn btn-danger w-100" onClick={handleClick}>
              {letter}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
