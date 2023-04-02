import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Reading from "./Reading.js";
import Read from "./Read";
import Toread from "./Toread";
import BookUpload from "./BookUpload";
import { auth } from "../firebaseConfig";
import AuthContainer from "./AuthContainer.js";
import { db } from "../firebaseConfig.js";
import {
  
  collection,
  getDoc,
  doc,
  setDoc,
  addDoc,
  getDocs,
} from "@firebase/firestore";
//import { useCollectionData } from "react-firebase-hooks/firestore";
import Users from "./Users";
import Misc from "./Misc"

function App() {
  const [user, setUser] = useState(null);
  const [userID,setUserID] = useState("");

  

  useEffect(() => {
    const addUserToFirestore = async (user) => {
      const userId = user.uid;
      const userRef = doc(db, "users", userId);
      console.log(userId);
      setUserID(userId)

      // Check if the user document already exists
      const userDoc = await getDoc(userRef);
      if (!userDoc.exists()) {
        // If the user document doesn't exist, create it
        await setDoc(userRef, {
          email: user.email,
          displayName: user.displayName, // assuming you're using Google Sign-In with displayName
          photoURL: user.photoURL, // assuming you're using Google Sign-In with photoURL
        });
      }

      const booksRef = collection(db, "users", userId, "books");
      const booksCollection = await getDocs(booksRef);
      if (booksCollection.empty) {
        await addDoc(collection(db, "users", userId, "books"), {
          Title: "Oathbringer (The Stormlight Archive, #3)",
          Author: "Brandon Sanderson",
          Review: 0,
          pages: 1248,
          book_shelf: "currently-reading",
          img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654573897i/34002132.jpg",
          description: "",
          progress: "",
        });
      }
      // Check if the books collection already exists for this user
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        addUserToFirestore(user);
      }
    });

    return unsubscribe;
  }, []);



  return (
    <div>
      {user ? (
        <div>
          <Users user={user}/>
          <NavBar userId={userID}/>
          <Reading userId={userID}/>
          <Read userId={userID}/>
          <Toread userId={userID}/>
          <BookUpload userId={userID}/>
          <Misc userId={userID}/>
        </div>
      ) : (
        <AuthContainer />
      )}
    </div>
  );
}

export default App;
