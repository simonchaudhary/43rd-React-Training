import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

// Define your components
const Home = () => <h1>Home this is home page</h1>;
const AboutUs = () => <h1>About us page</h1>;
const Login = () => <h1>Login page</h1>;
const HomeIndex = () => <h1>Home Index</h1>;
const NotFound = () => <h1>404 Not Found</h1>;
const Teams = () => (
  <div>
    <h1>teams</h1>
    <Outlet />
  </div>
);
const TeamsId = () => {
  const data = useParams();
  console.log("data", data);

  return (
    <div>
      <h1>teams Id</h1>
    </div>
  );
};
const TeamsEdit = () => <h1>teams edit</h1>;
const TeamsNew = () => <h1>teams New</h1>;
const TeamsIndex = () => <h1>teams Index</h1>;

function Router() {
  return (
    <BrowserRouter>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="teams">
          <Route index element={<TeamsIndex />} />
          <Route path=":teamId" element={<TeamsId />} />
          <Route path=":teamId/edit" element={<TeamsEdit />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
