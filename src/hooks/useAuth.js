import { useContext } from "react";
import { ProviderAuth } from "../context/AuthContext";

const useAuth = () => {
  return useContext(ProviderAuth);
};
export default useAuth;
