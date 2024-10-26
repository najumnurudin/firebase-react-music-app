import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth, db } from '../libraries/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Create a Context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [theme, setTheme] = useState(true)
    const [userData, setUserData] = useState(null);  // Store fetched user data here

    useEffect(() => {
        // Listen for authentication state changes
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                console.log("User is logged in:", user);
                setUser(user);
                // Fetch user data from Firestore when user is authenticated
                await fetchUserData(user.uid);
            } else {
                console.log("No user is logged in.");
                setUser(null);
                setUserData(null);
            }
        });

        // Clean up the subscription on unmount
        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            const userData = await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in:", userData.user);
            setUser(userData.user);

            // Fetch user data from Firestore after login
            await fetchUserData(userData.user.uid);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const register = async (email, password, username, imgUrl) => {
        try {
            // Register the user using Firebase authentication
            const userData = await createUserWithEmailAndPassword(auth, email, password);
    
            // If registration is successful, store additional user data in Firestore
            await setDoc(doc(db, "Users", userData.user.uid), {
                username,
                email,
                avatar: imgUrl,
                id: userData.user.uid,
            });
    
            console.log("User registered and profile created:", userData.user);
            setUser(userData.user);
            await fetchUserData(userData.user.uid);
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    const fetchUserData = async (uid) => {
        try {
            const docRef = doc(db, "Users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                console.log("Fetched user data:", data);
                setUserData(data);  // Set the fetched data in state
            } else {
                console.log("No such user document exists!");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out");
            setUser(null);
            setUserData(null);  // Clear user data on logout
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ theme, setTheme , user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};

// Create a custom hook for easier access to the context
export const useAuth = () => {
    return useContext(AuthContext);
};
