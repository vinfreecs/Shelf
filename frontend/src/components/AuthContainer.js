import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function AuthContainer() {
  // const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user.displayName);
      })
      .catch((error) => {
        setErrorMessage(error.code + ": " + error.message);
      });
  };

  return (
    <div>
      <div>
        <div>
          <div className="flex justify-center items-center h-screen">
            <button
              className="bg-white shadow-md rounded-md flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              
              onClick={signInWithGoogle}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google logo"
                className="h-4 mr-2"
              />
              Sign in with Google
            </button>
          </div>
          <h1>{errorMessage}</h1>
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
