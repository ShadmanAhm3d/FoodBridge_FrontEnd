import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Cloud Kitchen</Link>
        <div>
          {isLoggedIn ? (
            <>
              <Link to="/create-post" className="mr-4">Create Post</Link>
              <Link to="/orders" className="mr-4">My Orders</Link>
              <button onClick={onLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
