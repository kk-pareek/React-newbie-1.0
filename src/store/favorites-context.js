import {createContext} from 'react';
import {useState} from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavorite(favoriteMeetup) {
    console.log('addFavorite called');
    console.log(favoriteMeetup);
    setUserFavorites((prevUserFavorites) => {
      console.log('setUserFavorites called');
      console.log(prevUserFavorites.concat(favoriteMeetup));
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavorite(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((favorite) => favorite.id !== meetupId);
    });
  }

  function isFavorite(meetupId) {
    return userFavorites.some((meetup)=> meetup.id == meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
    isFavorite: isFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
