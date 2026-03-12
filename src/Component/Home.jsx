function Home() {
  return (
    <div className="container my-5 text-warning">
      <div className="row align-items-center g-4">
        {/* TEXT SECTION */}
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 className="fw-bold">Hi, I'm Kartik Magar</h1>
          <h4 className="mb-3">Frontend Developer</h4>

          <p className="text-secondary">
            I’m passionate about learning and building interactive,
            user-friendly web applications and I’m looking for opportunities to
            grow as a front-end or full-stack developer.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 mt-4">
            <button className="btn btn-primary px-4">Hire Me</button>
            <button className="btn btn-outline-primary px-4" ><a target="_blank">Let’s Talk</a></button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="col-12 col-md-6 text-center">
          <div
            className="mx-auto rounded-circle overflow-hidden"
            style={{
              width: "220px",
              height: "220px",
            }}
          >
            <img
              src="kartik.jpeg"
              alt="Kartik Magar"
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
