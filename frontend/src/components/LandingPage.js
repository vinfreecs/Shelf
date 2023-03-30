import React from 'react'
import { signInWithGoogle } from '../firebaseConfig'
import { onAuthStateChanged,signOut } from 'firebase/auth'
function LandingPage() {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(user => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const [data, setData] = useState(null);

  useEffect(() => {
    const userId = firebase.auth().currentUser.uid;

    const unsubscribe = firebase.firestore()
      .collection('users')
      .doc(userId)
      .onSnapshot(snapshot => {
        setData(snapshot.data());
      });

    return unsubscribe;
  }, []);

  return (
    <div>
<div>
      {user ? (
        <div>
          <p>Hello, {user.displayName}!</p>
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      )}
    </div>
    <div>
      <p>Username: {data?.username}</p>
      <p>Email: {data?.email}</p>
    </div>
    </div>
    
  )
}

export default LandingPage