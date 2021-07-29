import { useContext } from "react";
import Context from "../Context/AuthContext";
import { Route, Redirect } from "react-router-dom";

const Dashboard = () => {
  const logger = useContext(Context);

  return (
    <div>
      <Route>
        <h1>Dashboard</h1>
        {logger.loggedIn ? "Welcome to Dashboard" : <Redirect to="/day-24" />}
      </Route>
    </div>
  );
};

export default Dashboard;
