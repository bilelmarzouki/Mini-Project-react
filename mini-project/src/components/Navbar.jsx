import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>Recipe App</h1>
      <div className="nav-links">
        <Link to="/">Dashboard</Link> | <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
export default Navbar;