import './MoPoSlide.scss';

function MoPoSlide() {
  return (
    <div className="custom-slide each-slide-effect MoPoSlide">
        <div className='image'>
            <div className='logo'></div>
        </div>
        <div className='description'>
            <p>
                I am proud that the newspaper <strong>Hamburger Morgenpost</strong> featured our upcoming Race Across Germany and the goals of our project.
                <br />
                <br />
                The article offers an inside look into the objectives we hope to achieve through our project and how our race is an important step towards reaching these goals.
                <br />
                It also highlights the hard work and dedication required to be successful.
                
                <br />
                <br />
                If you're interested in learning more about our journey, our goals and the impact we hope to make, we invite you to read the full article online.
            </p>
            <div className='ctas'>
                <a href="https://www.mopo.de/podcast/die-zweite-luft/grosser-mann-grosse-ambitionen-jasper-lichte-im-gespraech/" target="_blank" rel="noreferrer">Read online</a>
            </div>
        </div>
    </div>
  );
}

export default MoPoSlide;