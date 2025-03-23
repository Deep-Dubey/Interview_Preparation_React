import React from 'react';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1 className="error-code">404</h1>
      <p className="error-message">Oops! The page you are looking for does not exist.</p>
      <a href="/" className="error-button">Go Back Home</a>
    </div>
  );
};

export default ErrorPage;

// CSS Styles
const styles = `
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
    color: #343a40;
    font-family: Arial, sans-serif;
  }

  .error-code {
    font-size: 6rem;
    font-weight: bold;
    color: #dc3545;
  }

  .error-message {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .error-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s;
  }

  .error-button:hover {
    background-color: #0056b3;
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);