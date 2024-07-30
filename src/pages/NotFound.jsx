import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          padding: '40px',
          textAlign: 'center',
          maxWidth: '50%',
          width: '100%',
        }}
      >
        <h1
          style={{
            color: '#333',
            fontSize: '36px',
            marginBottom: '20px',
          }}
        >
          404 - Recipe Not Found
        </h1>
        <p
          style={{
            color: '#666',
            fontSize: '18px',
            marginBottom: '30px',
          }}
        >
          Oops! The recipe you're looking for doesn't seem to exist.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-block',
            backgroundColor: '#ff6b7b',
            color: 'white',
            textDecoration: 'none',
            padding: '12px 24px',
            borderRadius: '4px',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;