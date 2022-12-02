import React from 'react'

function Regi() {
    return (
        <div className='d-flex justify-content-center m-5 p-5 ' style={{backgroundColor:'#F6F6F6'}}>
            <div className='w-25 shadow p-3 mb-5 bg-body rounded ' style={{backgroundColor:'#ffffff'}}>
                <h2 className='text-center'>Registration</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name </label>
                    <input type="text" className="form-control p-4" id="exampleFormControlInput1" placeholder="full name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email </label>
                    <input type="email" className="form-control p-4" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input type="password" className="form-control p-4" id="exampleFormControlInput1" placeholder="password" />
                </div>

                <div className="form-check p-3 d-flex align-items-center">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            Doctor
                        </label>
                </div>
                <button type="button" class="btn btn-success">Submit</button>
            </div>
        </div>
    )
}

export default Regi