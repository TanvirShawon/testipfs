import React from 'react'

function Login() {
    return (
        <div className='d-flex justify-content-center m-5 p-5 ' style={{ backgroundColor: '#F6F6F6' }}>
            <div className='w-25 shadow p-3 mb-5 bg-body rounded ' style={{ backgroundColor: '#ffffff' }}>
                <h2 className='text-center'>Login</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email </label>
                    <input type="email" className="form-control p-4" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control p-4" id="exampleFormControlInput1" placeholder="password" />
                </div>
                
                
                <button type="button" class="btn btn-success">Submit</button>
            </div>
        </div>
    )
}

export default Login