import { useAuth } from "../providers/AuthProvider";
import { decodeToken } from "react-jwt";

const UserPanel = () => {
  const { token } = useAuth();
  const decodedToken = decodeToken(token);

  return (
    <div className="user-section">
      <div className="welcome-message">
        {decodedToken ? (
          <span>
            Welcome,
            <br />
            <span className="loggedInUsername">{decodedToken.username}</span>
          </span>
        ) : (
          <span>Not signed in.</span>
        )}
      </div>
    </div>
  );
};

export default UserPanel;
