import toast from "react-hot-toast";

// validate login page usernname
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}

//validate password
export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

// validate reset password 
export async function resetPasswordValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_password){
        errors.exist = toast.error("password not match....!");
    }
    return errors;
}

//varify password
function passwordVerify(errors = {}, values) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!values.password) {
    errors.password = toast.error("password Required..!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Wrong Password...!");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Password must be more the 4 characters");
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("password must have special character");
  }
  return errors;
}

// validate username
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }
  return error;
}
