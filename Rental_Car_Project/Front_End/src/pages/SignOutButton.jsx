// SignOutButton.js
import React from 'react';
import { useAuth } from './authContext';

const SignOutButton = () => {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      style={{
        borderRadius: '20px',
        border: '1px solid #ff4b2b',
        backgroundColor: '#ff4b2b',
        color: '#ffffff',
        fontSize: '12px',
        fontWeight: 'bold',
        padding: '12px 45px',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        transition: 'transform 80ms ease-in',
        border: 'none',
      }}
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
