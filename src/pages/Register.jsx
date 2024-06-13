import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Register = () => {
  const registerForm = useRef(null);
  const { registerUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1 !== password2) {
      alert("Passwords did not match!");
      return;
    }

    const userInfo = { name, email, password1, password2 };

    registerUser(userInfo);
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?
              <Link
                className="font-medium
                text-black
                transition-all
                duration-200
                hover:underline
"
                to="/login">
                Sign In
              </Link>
            </p>
            <form ref={registerForm} onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900">
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      name="password1"
                      autoComplete="password1"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    name="password2"
                    autoComplete="password2"
                    placeholder="Confirm password"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    value="Register"
                    className="btn inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                    Create Account
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2">
                      <line x1={5} y1={12} x2={19} y2={12} />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                  </svg>
                </span>
                Sign up with Google
              </button>
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none">
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                  </svg>
                </span>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
            alt=""
          />
        </div>
      </div>
    </section>

    //   <div className="container">
    //     <div className="login-register-container">
    //       <form ref={registerForm} onSubmit={handleSubmit}>

    //       <div className="form-field-wrapper">
    //             <label>Name:</label>
    //             <input
    //               required
    //               type="text"
    //               name="name"
    //               placeholder="Enter name..."
    //               />
    //         </div>

    //         <div className="form-field-wrapper">
    //             <label>Email:</label>
    //             <input
    //               required
    //               type="email"
    //               name="email"
    //               placeholder="Enter email..."
    //               />
    //         </div>

    //         <div className="form-field-wrapper">
    //             <label>Password:</label>
    //             <input
    //               type="password"
    //               name="password1"
    //               placeholder="Enter password..."
    //               autoComplete="password1"
    //               />
    //         </div>

    //         <div className="form-field-wrapper">
    //             <label>Confirm Password:</label>
    //             <input
    //               type="password"
    //               name="password2"
    //               placeholder="Confirm password..."
    //               autoComplete="password2"
    //               />
    //         </div>

    //         <div className="form-field-wrapper">

    //             <input
    //               type="submit"
    //               value="Register"
    //               className="btn"
    //               />

    //         </div>

    //       </form>

    //       <p>Already have an account? <Link to="/login">Login</Link></p>

    //     </div>
    // </div>
  );
};

export default Register;
