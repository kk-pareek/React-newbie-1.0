import MainNavigationBar from './MainNavigationBar';
import classes from './Layout.module.css';
import TopNavigation from './TopNavigation';

function MeetupsLayout(props) {
  return (
    <div>
      <MainNavigationBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default MeetupsLayout;
