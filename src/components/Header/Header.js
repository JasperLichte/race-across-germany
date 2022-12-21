import './Header.scss';

function Header() {
  const headerTitle = 'Race Across Germany';

  return (
    <header className='Header'>
      <h1>
        <span aria-hidden="true">{headerTitle}</span>
        {headerTitle}
        <span aria-hidden="true">{headerTitle}</span>
      </h1>
      <h2 className='no-border'>Jasper Lichte</h2>
    </header>
  );
}

export default Header;
