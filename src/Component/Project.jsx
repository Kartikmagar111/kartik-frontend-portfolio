import { Link } from "react-router-dom";

function Project() {
  return (
    <div className="container my-5 text-center text-success">

      <h2 className="mb-4 fw-bold">Projects</h2>

      <div className="row g-4 justify-content-center">

        {/* PROJECT 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 bg-primary-subtle shadow-sm">
            <div className="card-header p-0">
              <img
                src="OIP.webp"
                alt="Weather App"
                className="img-fluid w-100 object-fit-cover rounded-top"
                style={{ height: "200px" }}
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">Weather Web Application</h5>
              <p className="card-text">
                Users can search city-wise weather forecasts and view
                today’s temperature in Celsius with a clean UI.
              </p>
            </div>

            <div className="card-footer bg-transparent border-0">
              <a
                href="https://github.com/Kartikmagar111"
                target="_blank"
                rel="noreferrer"
                className="bi bi-github fs-4 text-dark float-end"
              ></a>
            </div>
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 bg-danger-subtle shadow-sm">
            <div className="card-header p-0">
              <img
                src="todo.jpg"
                alt="Todo App"
                className="img-fluid w-100 object-fit-cover rounded-top"
                style={{ height: "200px" }}
              />
            </div>

            <div className="card-body">
              <h5 className="card-title">To-Do Web Application</h5>
              <p className="card-text">
                Users can register, log in, and manage tasks.
                CRUD operations are handled via APIs using Axios.
              </p>
            </div>

            <div className="card-footer bg-transparent border-0">
              <a
                href="https://github.com/Kartikmagar111/To-Do-Project.git"
                target="_blank"
                rel="noreferrer"
                className="bi bi-github fs-4 text-dark float-end"
              ></a>
            </div>
          </div>
        </div>
   
           { /* PROJECT 3 */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card h-100 bg-primary-subtle shadow-sm">
            <div className="card-header p-0">
              <img
                src="pipeline.jpeg"
                alt="Weather App"
                className="img-fluid w-100 object-fit-cover rounded-top"
                style={{ height: "200px" }}
              />
            </div>

            <div className="card-body">
              <h5 className="card-title"> Visual Pipeline Builder Web Application</h5>
              <p className="card-text">
                Users can search city-wise weather forecasts and view
                today’s temperature in Celsius with a clean UI.
              </p>
            </div>

            <div className="card-footer bg-transparent border-0">
              <a
                href="https://github.com/Kartikmagar111"
                target="_blank"
                rel="noreferrer"
                className="bi bi-github fs-4 text-dark float-end"
              ></a>
            </div>
          </div>
        </div>






      </div>
    </div>
  );
}

export default Project;
