import MeetupsLayout from "../components/layout/MeetupsLayout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import AllMeetupsPage from "../pages/AllMeetups";
import NewMeetupPage from "../pages/NewMeetup";
import FavoritesPage from "../pages/Favorites";

function MeetupsPage(props) {
  return (
    <MeetupsLayout>
      <Routes>
        <Route path="allMeetups" element={<AllMeetupsPage />}></Route>
        <Route path="new-meetup" element={<NewMeetupPage />}></Route>
        <Route path="favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </MeetupsLayout>
  );
}

export default MeetupsPage;
