'use client';
import Footer from "./components/footer";
import { useState } from 'react';

export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      <div className="opening-container flex">
        <div className="opening-image w-3/5 h-screen bg-blue-500"></div>
        <div className="opening-content w-2/5 h-screen flex items-center justify-center  bg-gray-100">
          <div className="content w-4/5">
          {showLogin ? (
              // Login Form
              <div>
                <h2 className="p-5 text-3xl text-center">Log In</h2>
                <form className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                  />
                  <button
                    type="submit"
                    className="btn bg-blue-500 rounded-lg p-2 px-4 text-white"
                  >
                    Login
                  </button>
                </form>
                <button
                  className="text-blue-500 mt-4"
                  onClick={() => setShowLogin(false)}
                >
                  Back to Home
                </button>
              </div>
            ) : (
              // Default Welcome Screen
              <div>
                <h1 className="p-5 text-3xl text-center">Welcome to "Name"!</h1>
                <div className="opening-buttons flex justify-center gap-12">
                  <button
                    className="btn bg-blue-500 w-24 rounded-lg p-2 px-4 text-white"
                    onClick={() => setShowLogin(true)}
                  >
                    Log In
                  </button>
                  <button className="btn bg-blue-500 w-24 rounded-lg p-2 px-4 text-white">
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="features-container flex">
        <div className="features-image w-1/2 p-10 flex items-center justify-center bg-withe">
          <div className="w-3/5 bg-blue-500">aaaaaa</div>
        </div>
        <div className="features-content w-1/2  p-10 flex items-center justify-center bg-white">
          <div className="content w-4/5">
            <h2 className="p-5 text-3xl">This is a title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="info-container flex">
        <div className="info-content w-1/2 p-10 flex items-center justify-center bg-grey">
          <div className="content w-4/5">
            <h2 className="p-5 text-3xl">This is a title</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="info-image w-1/2 p-10 flex items-center justify-center bg-grey-100">
          <div className="w-3/5 bg-blue-500">aaaaaa</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
