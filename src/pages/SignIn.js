import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

import Header from "../partials/Header";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [profession, setProfession] = useState("");

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = () => {
    api
      .get(`/currentUser`)
      .then((res) => {
        console.log(res.data);
        setId(res.data._id);
        setIsLoggedIn(true);
        api
          .get(`/userInfo/${res.data._id}`)
          .then((r) => {
            console.log(r.data);
            setName(r.data.name || "");
            setDateOfBirth(r.data.dateOfBirth || "");
            setProfession(r.data.profession || "");
            setIsLoggedIn(true);
          })
          .catch((e) => console.log(e));
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      })
      .finally(() => setHasLoaded(true));
  };

  const handleSignIn = () => {
    api
      .post("/login/", {
        username: email,
        password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("JWToken", response.data);
        window.location.reload();
        // setIsLoggedIn(true);
        fetchAllData();
      })
      .catch((error) => {
        console.log(error);
        setIsLoggedIn(false);
      });
  };
  const handleUpdate = () => {
    api
      .post("/userInfo/", { id, name, dateOfBirth, profession })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = () => {
    api
      .delete(`/userInfo/${id}`)
      .then((response) => {
        console.log(response.data);
        api
          .delete(`/user/${id}`)
          .then((res) => {
            console.log(res.data);
            handleLogout();
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => console.log(error));
  };
  const handleLogout = () => {
    localStorage.removeItem("JWToken");
    window.location.reload();
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Welcome back. We exist to make entrepreneurism easier.
                </h1>
              </div>

              {/* Form */}
              {hasLoaded ? (
                <div>
                  {isLoggedIn ? (
                    <div className="bg-gray-200 p-4 rounded-xl shadow-xl felx felx-col space-y-10 w-96 mx-auto">
                      <div className="flex justify-end space-x-10">
                        <h1>Dashboard</h1>
                        <button
                          className="bg-red-600 text-white p-1 rounded hover:bg-red-700"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </div>
                      <table className="mx-auto">
                        <tbody>
                          <tr>
                            <td>Name : </td>
                            <td>
                              <input
                                className="w-48 text-center"
                                type="text"
                                value={name}
                                onChange={(e) => {
                                  setName(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Date Of Birth : </td>
                            <td>
                              <input
                                className="w-48 text-center"
                                type="date"
                                value={dateOfBirth}
                                onChange={(e) => {
                                  setDateOfBirth(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Profession : </td>
                            <td>
                              <input
                                className="w-48 text-center"
                                type="text"
                                value={profession}
                                onChange={(e) => {
                                  setProfession(e.target.value);
                                }}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <button
                                onClick={handleUpdate}
                                className="bg-blue-600 p-1 rounded text-white hover:bg-blue-700 ml-5 mr-5"
                              >
                                Update
                              </button>
                            </td>
                            <td>
                              <button
                                onClick={handleDelete}
                                className="bg-yellow-600 p-1 rounded text-white hover:bg-yellow-700 ml-10 mr-10"
                              >
                                Delete Account
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="max-w-sm mx-auto">
                      <form>
                        <div className="flex flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <label
                              className="block text-gray-800 text-sm font-medium mb-1"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="email"
                              type="email"
                              className="form-input w-full text-gray-800"
                              placeholder="Enter your email address"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <div className="flex justify-between">
                              <label
                                className="block text-gray-800 text-sm font-medium mb-1"
                                htmlFor="password"
                              >
                                Password
                              </label>
                              <Link
                                to="reset-password"
                                className="text-sm font-medium text-blue-600 hover:underline"
                              >
                                Having trouble signing in?
                              </Link>
                            </div>
                            <input
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="password"
                              type="password"
                              className="form-input w-full text-gray-800"
                              placeholder="Enter your password"
                              required
                            />
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-4">
                          <div className="w-full px-3">
                            <div className="flex justify-between">
                              <label className="flex items-center">
                                <input
                                  type="checkbox"
                                  className="form-checkbox"
                                />
                                <span className="text-gray-600 ml-2">
                                  Keep me signed in
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mt-6">
                          <div className="w-full px-3">
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                handleSignIn();
                              }}
                              className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="flex items-center my-6">
                        <div
                          className="border-t border-gray-300 flex-grow mr-3"
                          aria-hidden="true"
                        ></div>
                        <div className="text-gray-600 italic">Or</div>
                        <div
                          className="border-t border-gray-300 flex-grow ml-3"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <form>
                        <div className="flex flex-wrap -mx-3 mb-3">
                          <div className="w-full px-3">
                            <button className="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                              <svg
                                className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                              </svg>
                              <span className="flex-auto pl-16 pr-8 -ml-16">
                                Continue with GitHub
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                          <div className="w-full px-3">
                            <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                              <svg
                                className="w-4 h-4 fill-current text-white opacity-75 flex-shrink-0 mx-4"
                                viewBox="0 0 16 16"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                              </svg>
                              <span className="flex-auto pl-16 pr-8 -ml-16">
                                Continue with Google
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                      <div className="text-gray-600 text-center mt-6">
                        Don’t you have an account?{" "}
                        <Link
                          to="/signup"
                          className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                        >
                          Sign up
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
