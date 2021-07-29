import { useContext } from "react";
import Context from "../Context/AuthContext";
import { Route, Redirect } from "react-router-dom";

const Profile = () => {
  const logger = useContext(Context);
  return (
    <div>
      <Route>
        <h1>Profile</h1>
        {logger.loggedIn ? (
          "Welcome to your Profile"
        ) : (
          <Redirect to="/day-24" />
        )}
      </Route>
    </div>
  );
};

export default Profile;
