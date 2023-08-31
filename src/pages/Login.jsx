import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="lg:flex justify-evenly  p-4">
      <div>
        <h1 className="uppercase font-bold text-center text-xl underline mt-2">
          login Here
        </h1>
        <form className="">
          <div className=" justify-center p-5 gap-5">
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

            <div className="flex gap-2 font-bold mt-2">
              <p className="text-justify">Don't have an account ?</p>
              <Link className="text-blue-700 hover:underline" to="/register">
                Register
              </Link>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-slate-600 rounded-lg p-2 text-white font-bold h-12"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
