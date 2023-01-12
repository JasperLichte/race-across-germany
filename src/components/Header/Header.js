import './Header.scss';

function Header() {
  const headerTitle = 'Race Across Germany';

  return (
    <header className='Header'>
      <div className='JL_logo'></div>
      <div className='Header-wrapper'>
        <h1>Race Across Germany <span>2023</span></h1>
        <h2>Team Lichte</h2>
      </div>
    </header>
  );
}

export default Header;
