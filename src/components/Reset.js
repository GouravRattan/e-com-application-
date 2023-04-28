import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import {resetPasswordValidation} from "../helper/validate"

import styles from "../styles/Username.module.css";

export default function Reset() {
  const formik = useFormik({
    initialValues: {
      Password: "admin@123",
      Confirm_Password: "admin@123",

    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      console.log(value);
    },
  });

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}>
        {" "}
      </Toaster>

      <div className="flex items-center h-screen justify-center">
        <div className={styles.glass} style={{width : "50%" }} >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password
            </span>
          </div>

          <form className="py-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("Password")}
                className={styles.textbox}
                type="password"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("Confirm_Password")}
                className={styles.textbox}
                type="password"
                placeholder="Repeat Password"
              />
              <button className={styles.btn} type="submit">
                 Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
