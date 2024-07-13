// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect, useContext } from "react";

const UserProfileContext = createContext({
  userProfile: null,
  setUserProfile: () => {},
});

export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Check for existing user profile data in local storage or fetch from backend (replace with your logic)
    const storedProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (storedProfile) {
      setUserProfile(storedProfile);
    }
  }, []);

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserProfile = () => useContext(UserProfileContext);
