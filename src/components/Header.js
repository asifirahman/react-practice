import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/011/405/724/small/call-food-logo-design-food-delivery-service-logo-concept-free-vector.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact  Us
            </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
