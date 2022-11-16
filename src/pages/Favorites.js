import {useContext} from 'react';
import MeetupList from '../components/meetups/MeetupList';
import FavoritesContext from '../store/favorites-context';

function FavoritesPage() {
  const favoritesContest = useContext(FavoritesContext);
  const favoriteMeetups = favoritesContest.favorites;
  let content;

  if (favoriteMeetups.length === 0) {
    content = <p>No favorites found. Add some?</p>;
  } else {
    content = <MeetupList meetups={favoriteMeetups}></MeetupList>;
  }

  return (
    <div>{content}</div>
  );
}

export default FavoritesPage;
