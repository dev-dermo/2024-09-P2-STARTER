import { Outlet, Link } from "react-router-dom";
import auth from "./utils/auth";

function App() {
  const isLoggedIn = auth.loggedIn();

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        {isLoggedIn ? (
          <>
            <a href="#" onClick={() => auth.logout()}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/users/login">Login</Link>
            <Link to="/users/new">Signup</Link>
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default App;
