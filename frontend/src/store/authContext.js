// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useReducer } from 'react';
import authReducer from './reducers/authReducer';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;