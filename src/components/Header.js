import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/contextAPI/UserContext";

const Header = () => {
  //Needs to be destructured since useContext(UserContext)
  //will return an object
  const { loggedInUser } = useContext(UserContext);

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
            <button
              style={{
                backgroundColor: useOnlineStatus() ? "green" : "red",
                height: "15px",
                borderRadius: "15px",
                marginRight: "5px",
              }}
            ></button>
            Online Status
          </li>
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
              Contact Us
            </Link>
          </li>
          <li>
            <Link className="link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>{loggedInUser}</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
