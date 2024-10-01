import React from "react";
import FormContect from "./FormContect";
// import 'react-phone-input-2/lib/style.css'
// import flags from 'react-phone-number-input-2/flags'

function Contect() {
  return (
    <div className="container mt-5 bg-dark ">
      <div className="row justify-content-center">
        <div className="col-md-6 p-5">
          <div className="card shadow p-4 ">
            <h2 className="text-center mb-4">Contact Us</h2>
            <p className="text-center mb-4">Book a Demo Class, For Free!</p>
            <FormContect/>
            <p className="text-center mt-3">
              You may also call us at +91 9755132718
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contect;
