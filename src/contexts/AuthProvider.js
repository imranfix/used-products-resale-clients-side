import { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


       // 1. Create User:
       const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


        // 7. Google SignIn:
        const googleProvider = new GoogleAuthProvider();
        const signInWithGoogle = () =>{
            setLoading(true);
            return signInWithPopup(auth, googleProvider);
        }
    


        // 2. Login user:
        const signIn = (email, password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        }

        // 3. signOut/logOut:
        const logOut = () => {
            setLoading(true);
            return signOut(auth);
         }
    
             // 4. set auth state observer:
    useEffect ( () =>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
                // console.log('user observing');
                setUser(currentUser);
                setLoading(false);
            });
            return () => unsubscribe();
    }, []);

           // 6. update User method:
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo);
    }






    const authInfo = {
       
        user,
        createUser,
        signIn,
        logOut,
        updateUser,
        loading,
        signInWithGoogle,
    
        
    }

    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )

    
}


export default AuthProvider;





