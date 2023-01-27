import './Nav.scss';

function Nav() {
  return (
    <nav className='Nav'>
        <ul>
            <li><a href='#about-the-race'>The Race</a></li>
            <li><a href='#the-athlete'>The Athlete</a></li>
            <li><a href='#the-team'>The Team</a></li>
            <li><a href='#our-goals'>Our Goals</a></li>
            <li><a href='#charity'>Charity</a></li>
            <li><a href='#support'>Support us!</a></li>
        </ul>
    </nav>
  );
}

export default Nav;
