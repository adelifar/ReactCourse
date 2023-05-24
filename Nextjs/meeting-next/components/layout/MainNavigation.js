import classes from './MainNavigation.module.css';
import Link from 'next/link';
function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetings</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All Meetings</Link>
          </li>
          <li>
            <Link href='/new-meeting'>Add New Meeting</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
