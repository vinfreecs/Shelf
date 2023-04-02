import React from "react";
//import { db } from "../firebaseConfig";
//import { useCollectionData } from "react-firebase-hooks/firestore";
//import { collection, onSnapshot } from "firebase/firestore";
import { auth } from "../firebaseConfig";

function Users(props) {
  
  return (
    <div className="relative">
  <div className="fixed right-0 ">
    <div className="rounded-3xl pr-2 pt-2 flex flex-col items-center" onClick={() => auth.signOut()}>
      <img
        className="w-10 h-10 rounded-full hover:[w-12 h-12]"
        src={props.user.photoURL}
        alt={props.user.displayName}
      />
      <button className="font-semibold text-slate-500 border-slate-600">Sign Out</button>
    </div>
  </div>
</div>

  );
}

export default Users;
