import React from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
    return (
        <div className='container text-center mt-5 mb-5'>
            <h1>Create-Account</h1>
            <br />
            <form className='mb-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder='Email-Address' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder='Password' className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">ReWritte-Password</label>
                    <input type="password" placeholder='Password' className="form-control" id="exampleInputPassword2" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-warning w-5">Log-In</button>
            </form>
            <p>New to Ema-Jhon? <Link to='/log-in'>Log-In</Link></p>
            <div>---------------OR---------------</div> <br />
            <button className='btn btn-warning w-5'>Google Sign-In</button>

        </div>
    );
};

export default CreateAccount;