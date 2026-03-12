

function Login() {
    return (<div>
        <div className="fs-4 text-center text-success " height="200px" width="100px">Login</div>
            <div className="d-flex justify-content-center">
            <form className="w-25 form-control mb-4 bg-secondary">
                <h4 className="text-info text-center">Login </h4>
                <dl>
                    <dt className="form-label ">UserName</dt>
                    <dd><input type="text" placeholder="Enter UserName" className="form-control" /></dd>
                    <dt className="form-label">Passaword</dt>
                    <dd><input type="password" placeholder="Enter Passaword" className="form-control" /></dd>
                </dl>
                <button className=" btn btn-danger w-75 mx-4">Log In</button>
            </form>
            </div>
        
    </div>)
}

export default Login;