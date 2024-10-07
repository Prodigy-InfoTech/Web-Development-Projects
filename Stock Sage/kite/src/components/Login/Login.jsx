import { motion } from 'framer-motion';
export default function Login() {

    return (
        <div className="container" style={{ 'height': "100vh" }}>
            <h1 className="text-center mt-3" style={{ 'color': "rgb(77, 128, 209)" }}>Welcome to Zerodha</h1>
            <hr />
            <div className="row mb-5">
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h3 className='mb-5 text-muted'>Login Now</h3>
                    <div className="container">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                        </div>
                        <button type="button" className="btn btn-outline-primary mt-3">Login Now</button>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h3 className='mb-5 mt-5 text-muted'>Sign Up Now</h3>
                    <div className="container">
                    <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                                <label for="floatingPassword">Password</label>
                        </div>
                        <button type="button" className="btn btn-outline-primary mt-3">Sign Up Now</button>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}