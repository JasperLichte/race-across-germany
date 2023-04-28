import './Header.scss';
import Nav from './nav/Nav';
import PrideFlag from '../PrideFlag/PrideFlag';

function Header() {
  return (
    <header className='Header'>
      <Nav />
      <div className='JL_logo'></div>
      <div className='Header-wrapper'>
        <h1>Race Across Germany <span>2023</span></h1>
        <h2 className='no-border'>Team Lichte</h2>
      </div>
    </header>
  );
}

export default Header;
