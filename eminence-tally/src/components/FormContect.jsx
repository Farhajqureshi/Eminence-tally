import React from "react";
import { useFormik } from "formik";
import registerSchema from "../schema";
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'

const initialValues = {
  name: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

function FormContect() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values, action) => {
        console.log(values);
        axios
          .post(`${window.location.origin}/api/v1/createUser`, values)
          .then((result) =>
            Swal.fire({
              title: "Thank You",
              text: "Information submited successfully",
              icon: "success",
              showConfirmButton: true,
              confirmButtonText: "Ok",
              confirmButtonColor: 'black',
            })
          )
          .catch((err) => console.error(err));
        action.resetForm();
      },
    });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group p-2 flex-direction-column">
          {/* <label className="control-label">Username</label> */}
          <input
            type="name"
            name="name"
            id="name"
            className="form-control"
            placeholder="Username"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.name && touched.name ? (
          <p className="text-danger mx-2">{errors.name}</p>
        ) : null}
        <div className="form-group p-2">
          {/* <label htmlFor="lastName">Last Name</label> */}
          <input
            type="lastName"
            className="form-control"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.lastName && touched.lastName ? (
          <p className="text-danger mx-2">{errors.lastName}</p>
        ) : null}
        <div className="form-group p-1 d-flex">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            className="form-control m-1"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.email && touched.email ? (
          <p className="text-danger mx-2">{errors.email}</p>
        ) : null}

        <div className="form-group p-2 w-100">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            className="form-control"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        {errors.phoneNumber && touched.phoneNumber ? (
          <p className="text-danger mx-2">{errors.phoneNumber}</p>
        ) : null}

        <button
          type="submit"
          className="btn btn-dark btn-block w-100"
          style={{ marginTop: "10px" }}
        >
          Contect Now
        </button>
      </form>
    </div>
  );
}

export default FormContect;
