import UserContext from "../utils/contextAPI/UserContext";
import User from "./User";

const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>We deliver fast food fastest!!!</h2>
      {/* <User name="Asif" location="Kolkata,WB" /> */}
      <UserContext.Consumer>
        {({ loggedInUser }) => <h1>User : {loggedInUser}</h1>}
      </UserContext.Consumer>
    </div>
  );
};

export default AboutUs;
