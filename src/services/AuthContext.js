import { createContext, useState } from "react";

export const UserContext = createContext();

const AuthContext = ({children}) => {
    const [authUser, setAuthUser] = useState(undefined);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const signIn = (user) => {
        if (!user) return false;
        setAuthUser(user);
        setIsSignedIn(true);
        return true;
    };
    const signOut = () => {
        if (!authUser || !isSignedIn) return false;
        setAuthUser(undefined);
        setIsSignedIn(false);
        return true;
    }
  return (
    <UserContext.Provider value={{authUser, isSignedIn, signIn, signOut}}>
        {children}
    </UserContext.Provider>
  )
}

export default AuthContext