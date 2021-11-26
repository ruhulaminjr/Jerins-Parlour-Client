import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const ProviderAuth = createContext();

const AuthContext = ({ children }) => {
  const allAuth = useFirebase();
  return (
    <ProviderAuth.Provider value={allAuth}>{children}</ProviderAuth.Provider>
  );
};

export default AuthContext;
