import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/NotFound";
import Team from "./pages/team/Team";
import TeamId from "./pages/team/TeamId";
import ProtectedRoute from "./components/ProtectedRoute";

function TeamList() {
  return <div>Teamlist</div>;
}

function TeamLayout() {
  return (
    <div>
      TeamLayout
      <Outlet />
    </div>
  );
}

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="team" element={<TeamLayout />}>
          <Route index element={<TeamList />} />
          <Route path=":teamId/:personId" element={<Team />} />
          <Route path=":teamId/edit" element={<Team />} />
        </Route>

        <ProtectedRoute
          isLoggedIn={false}
          path="profile"
          element={<h1>this is profile</h1>}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
