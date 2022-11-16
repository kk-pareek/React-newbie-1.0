import classes from './MainNavigationBar.module.css';
import {Link} from 'react-router-dom';


function TopNavigation() {
  return (
    <header className={classes.header}>
            TopNavigation
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/meetups">Meetups App</Link>
          </li>
          <li>
            <Link to="/todos">Todo app</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default TopNavigation;
