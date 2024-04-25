import React, { useEffect } from "react";
import bg1 from "../assets/bg1.png";
import { RiArrowRightSFill } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuth0 } from "@auth0/auth0-react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from "@react-oauth/google";

// import { gapi } from "gapi-script";

function First() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Destructure isAuthenticated from useAuth0
  function onSignIn(googleUser) {
    // Access user profile information directly from googleUser object
    const profile = {
      id: googleUser.getId(),
      name: googleUser.getName(),
      imageUrl: googleUser.getImageUrl(),
      email: googleUser.getEmail()
    };
    console.log('ID: ' + profile.id); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.name);
    console.log('Image URL: ' + profile.imageUrl);
    console.log('Email: ' + profile.email);
  }
  
  
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
  useEffect((f) => {
    AOS.init({ duration: 1000 });
  }, []);

  // this is log in
  // const { loginWithRedirect, logout,isAuthenticated } = useAuth0();

  return (

    <GoogleOAuthProvider>

    
    <div className="bg-gray-600  bg-opacity-80 mt-0 font-serif f">
      <div className="flex justify-start ml-5">
        <div className="p">
          <h1
            className="max-w-[40vw] text-left bg-slte-400 center mt-5"
            data-aos="fade-down"
          >
            <span className="fclass sm:text-[3.5vw] text-[6vw] font-bold font-serif align-middle">
              {/* <br /> */}
              Pursue Mastery in <br />
              Mind,Body, and Soul with&nbsp;
            </span>
            <span className="koushuku font-bold sm:text-[4vw] text-[7vw] text-wrap">
              KOUSHUKU. <br />
            </span>
          </h1>
          <h2
            className="text-[3.5vw] sm:text-[1.5vw] font-serif "
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <div className="flex mt-4">
              <span className="mt-1 mr-1">
                <RiArrowRightSFill />
              </span>
              <span> Learn With Top Sensei. </span>
              {/* Train like a beast, fight like a warrior. */}
            </div>
            <div className="flex mt-4">
              <span className="mt-1 mr-1">
                <RiArrowRightSFill />
              </span> 
              <span> Learn any type of Martial Art.</span>
            </div>
            <div className="flex mt-4">
              <span className="mt-1 mr-1">
                <RiArrowRightSFill />
              </span>
              <span> Take Knowledge of Weapons. </span>
            </div>
            <div className="flex mt-4">
              <span className="mt-1 mr-1">
                <RiArrowRightSFill />
              </span>
              <span> Combat fight & Tournament fight. </span>
            </div>
          </h2>
          <div className="flex mt-8 space-x-10 ml-[28vw] mb-7">
            {isAuthenticated ? (
              <div>
                {/* <button
                  className="b2 bg-gray-900 w-[25vw] sm:w-[8vw] rounded-xl border text-white p-3"
                  onClick={signOut}  
                >
                  SignOut
                </button> */}
              </div>
            ) : (
              <div>
                {/* <button
                  data-onsuccess="onSignIn"
                  className="g-signin2 b1 bg-gray-900 w-[25vw] sm:w-[8vw]  rounded-xl border text-white p-3 "
                  onClick={onSignIn}
                >
                  Sign in
                </button> */}
              </div>
            )}
          </div>
        </div>
        <img
          className="w-[45vw] h-[40vw] absolute right-0 z-10"
          data-aos="fade-down"
          data-aos-delay="500"
          src={bg1}
          alt="Background1"
        />
      </div>
    </div>
    <GoogleLogin
  onSuccess={credentialResponse => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    </GoogleOAuthProvider>

  );
}

export default First;
