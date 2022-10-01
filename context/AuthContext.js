import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { createContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                getDocs(query(collection(db, "users"), where("email", "==", user.email)))
                    .then((result) => {
                        setAuthUser(result.docs.map(singleDoc => ({ ...singleDoc, uid: singleDoc.id })))
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        });
    }, []);

    return (
        <AuthContext.Provider value={{
            user: authUser
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;