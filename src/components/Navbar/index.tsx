import './styles.css';
import 'bootstrap/js/src/collapse.js'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-md main-nav navbar-dark icon-bar">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h2>Carros Top</h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink to="/" activeClassName="active" exact>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">CATALOGO</NavLink>
            </li>            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
