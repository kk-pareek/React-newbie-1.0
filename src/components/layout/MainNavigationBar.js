import {Link} from 'react-router-dom';
import classes from './MainNavigationBar.module.css';
import FavoritesContext from '../../store/favorites-context';
import {useContext} from 'react';

function MainNavigationBar() {
  const favoritesContext = useContext(FavoritesContext);
  const totalFavoriteMeetups = favoritesContext.totalFavorites;

  return (
    <header className={classes.header}>
            React Meetups
      <nav>
        <ul>
          <li>
            <Link to="allMeetups">All Meetups</Link>
          </li>
          <li>
            <Link to="new-meetup">Add New Meetups</Link>
          </li>
          <li>
            <Link to="favorites">Favorite Meetup
              <span className={classes.badge}>{totalFavoriteMeetups}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationBar;
