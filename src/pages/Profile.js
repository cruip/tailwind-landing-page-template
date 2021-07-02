import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

const Profile = () => {


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    return (
        <section className="container m-auto w-full flex items-center justify-center">
            <div className="w-2/3 bg-blue-100 pt-14 p-10">

                <div>
                    <img src={loggedInUser.photoURL} className="object-cover rounded-full w-28 h-28 m-auto" alt="" />
                    <h2 className="text-center font-bold text-2xl">{loggedInUser.displayName}</h2>
                </div>

                <div className="w-full flex justify-end">
                    <button className="px-5 py-2 text-blue-600 border-2 border-blue-600 bg-gray-100 rounded-full shadow-lg hover:bg-blue-300 hover:text-blue-900 hover:shadow-2xl transition duration-150 ease-in-out">Edit Your Profile</button>
                </div>

                <form action="" className="">

                    <div className="my-6">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" className="block my-2 p-2 border-0 bg-gray-100 w-full" defaultValue={loggedInUser.displayName} disabled />
                    </div>

                    <div className="my-6">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" className="block my-2 p-2 border-0 bg-gray-100 w-full" defaultValue={loggedInUser.email} disabled />
                    </div>

                    <div className="my-6">
                        <label htmlFor="dateOfBath">Your Date Of Bath</label>
                        <input type="date" id="dateOfBath" className="block my-2 p-2 border-0 bg-gray-100 w-full" defaultValue="2002-05-22" disabled />
                    </div>

                    <div className="my-6">
                        <label htmlFor="name">Your profession</label>
                        <input type="text" className="block my-2 p-2 border-0 bg-gray-100 w-full" defaultValue="Web Developer" disabled />
                    </div>

                </form>

                <div className="flex mt-5">

                    <Link to="/" onClick={() => setLoggedInUser({})} className="text-center m-auto border-2 border-red-400 bg-red-100 px-4 py-2 rounded-full shadow-lg flex text-gray-800 hover:bg-red-200 transition duration-300 ease-in-out text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Log Out</Link>

                    <button className="text-center m-auto border-2 border-red-400 bg-red-100 px-4 py-2 rounded-full shadow-lg flex text-red-900 font-bold hover:bg-red-300 transition duration-300 ease-in-out text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>

                        Delete Your Account
                    </button>
                </div>

            </div>


            <Link to="/" className="right-0 mr-10 px-5 py-3 rounded-full bg-blue-100 shadow-lg text-blue-900 absolute hover:bg-blue-200 transition duration-150 ease-in-out">Back To Home</Link>
        </section>
    );
};

export default Profile;