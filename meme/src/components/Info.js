import React from 'react'

function Info() {
    return (
        <div className='d-flex justify-content-center m-5 p-5 ' style={{backgroundColor:'#F6F6F6'}}>
            <div className='w-25 shadow p-3 mb-5 bg-body rounded ' style={{backgroundColor:'#ffffff'}}>
                <h2 className='text-center'>COVID-19 Info</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name </label>
                    <input type="text" className="form-control p-4" id="exampleFormControlInput1" placeholder="full name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Age </label>
                    <input type="number" className="form-control p-4" id="exampleFormControlInput1" placeholder="age" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">NID Number</label>
                    <input type="number" className="form-control p-4" id="exampleFormControlInput1" placeholder="nid bumber" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control p-4" id="exampleFormControlInput1"  />
                </div>
              
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Image</label>
                    <input type="file" className="form-control " id="exampleFormControlInput1"  />
                </div>

                
                <button type="button" class="btn btn-success">Submit</button>
            </div>
        </div>
    )
}

export default Info