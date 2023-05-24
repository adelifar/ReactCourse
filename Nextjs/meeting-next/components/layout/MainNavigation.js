import classes from './MainNavigation.module.css';

function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetings</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetings</Link>
          </li>
          <li>
            <Link to='/new-meeting'>Add New Meeting</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
