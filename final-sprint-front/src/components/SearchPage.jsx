import { useAuth } from "../providers/AuthProvider";
import { decodeToken } from "react-jwt";

const SearchPage = () => {
  const { token } = useAuth();
  const decodedToken = decodeToken(token);

  return (
    <div>
      Future location of the resume search form.
      <br />
      This page required an authentication token.
      <br />
      <b>Username: </b>
      <span>{decodedToken && decodedToken.username}</span>
      <br />
      <b>Username: </b>
      <span>{decodedToken && decodedToken.email}</span>
    </div>
  );
};

export default SearchPage;
