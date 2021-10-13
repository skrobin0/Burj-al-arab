import { getAuth, signInWithPopup, GoogleAuthProvider,  onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebaseApp from '../Firebase/Firebase.init';



initializeFirebaseApp();

const useFireBase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const logInWithGoogle = () => {

        signInWithPopup(auth, provider) 
        .then((result)=> setUser(result.user))
        .catch(error => setError(error.message)); 
    };


    useEffect (() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              
              setUser(user)
              
            } else {
              setError("")
            }
          });

    }, []);



    const handleSingOut = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            setError("")
          });
    }

    return{logInWithGoogle,user,error, handleSingOut};
};

export default useFireBase;




