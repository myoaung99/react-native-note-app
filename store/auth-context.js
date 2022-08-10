import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  loggout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = (token) => {
    setAuthToken(token);
  };

  const loggout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    loggout: loggout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
