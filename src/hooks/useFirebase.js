import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import FirebaseInit from "../firebase/firebase.init";
FirebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const storage = getStorage();
  const googelProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googelProvider);
  };
  const LogOut = () => signOut(auth).then(() => setUser({}));
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      if (currentuser) {
        setUser(currentuser);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  return {
    user,
    loading,
    error,
    setError,
    googleLogin,
    LogOut,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  };
};

export default useFirebase;
