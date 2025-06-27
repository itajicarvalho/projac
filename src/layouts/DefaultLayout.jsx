import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/DefaultLayout.css';

const DefaultLayout = ({ children, title = 'Floricultura' }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  
  // Simulate checking if user is logged in
  useEffect(() => {
    // In a real app, you would check localStorage or a context for authentication status
    const userLoggedIn = localStorage.getItem('user') !== null;
    setIsLoggedIn(userLoggedIn);
  }, [location]);

  return (
    <div className="app-container">
      <header>
        <h1>Floricultura</h1>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/clientes">Clientes</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/vendas">Vendas</Link></li>
            {isLoggedIn ? (
              <li><Link to="/logout">Logout</Link></li>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
      </header>

      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} Floricultura. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
