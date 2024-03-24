// authService.js

const API_BASE_URL = 'https://example.com/api/auth';

const authService = {
  signup: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful signup
        return data;
      } else {
        // Handle signup error
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
      throw new Error('Failed to signup. Please try again.');
    }
  },

  signin: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful signin
        return data;
      } else {
        // Handle signin error
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error during signin:', error.message);
      throw new Error('Failed to signin. Please check your credentials.');
    }
  },

  signout: async () => {
    try {
      // Perform any necessary cleanup or additional API requests for signout
      // ...

      // Successful signout
      return { success: true };
    // eslint-disable-next-line no-unreachable
    } catch (error) {
      console.error('Error during signout:', error.message);
      throw new Error('Failed to signout. Please try again.');
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful request for password reset
        return data;
      } else {
        // Handle error in forgot password request
        throw new Error(data.message);
      }
    } catch (error) {
      console.error('Error during forgot password request:', error.message);
      throw new Error('Failed to request password reset. Please try again.');
    }
  },
};

export default authService;
