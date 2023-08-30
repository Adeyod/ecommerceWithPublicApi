import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="lg:flex justify-evenly  px-4">
      <div>
        <h1 className="uppercase font-bold text-center text-xl underline mt-2">
          Register Here
        </h1>
        <form className="">
          <div className=" justify-center ">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-justify">
                First Name
              </label>
              <input
                className="border-2 w-full lg:w-[500px] rounded-lg pl-2 h-12"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First name here..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-justify">
                Last Name
              </label>
              <input
                className="border-2 w-full lg:w-[500px] rounded-lg pl-2 h-12"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last name here..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-justify">
                Email Address
              </label>
              <input
                className="border-2 w-full lg:w-[500px] rounded-lg pl-2 h-12 "
                type="email"
                name="email"
                id="email"
                placeholder="Email here..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-justify">
                Password
              </label>
              <input
                className="border-2 w-full lg:w-[500px] rounded-lg pl-2 h-12 "
                type="password"
                name="password"
                id="password"
                placeholder="Password here..."
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password2" className="text-justify">
                Confirm Password
              </label>
              <input
                className="border-2 w-full lg:w-[500px] rounded-lg pl-2 h-12 "
                type="password"
                name="password2"
                id="password2"
                placeholder="Confirm Password..."
                required
              />
            </div>
            <div className="flex gap-2 justify-center font-bold mt-2">
              <p>Already have an account ?</p>
              <Link className="text-blue-700 hover:underline" to="/login">
                Login
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-slate-600 rounded-lg p-2 text-white font-bold h-12"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
