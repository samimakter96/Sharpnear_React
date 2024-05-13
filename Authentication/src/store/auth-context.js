import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  const [logoutTimer, setLogoutTimer] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token);

    // Set logout timer for 5 minutes
    const timer = setTimeout(logoutHandler, 5 * 60 * 1000);
    setLogoutTimer(timer);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');

    // Clear the logout timer
    if (logoutTimer) {
      clearTimeout(logoutTimer);
      setLogoutTimer(null);
    }
  };

  useEffect(() => {
    // Clear the timeout and reset it whenever there's activity
    const resetLogoutTimer = () => {
      if (logoutTimer) {
        clearTimeout(logoutTimer);
        const newTimer = setTimeout(logoutHandler, 5 * 60 * 1000);
        setLogoutTimer(newTimer);
      }
    };

    window.addEventListener('click', resetLogoutTimer);
    window.addEventListener('keydown', resetLogoutTimer);

    return () => {
      window.removeEventListener('click', resetLogoutTimer);
      window.removeEventListener('keydown', resetLogoutTimer);
    };
  }, [logoutTimer]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
