import './TageblattSlide.scss';

function TageblattSlide() {
  return (
    <div className="custom-slide each-slide-effect TageblattSlide">
        <div className='image'>
            <div className='logo'></div>
        </div>
        <div className='description'>
            <p>
            I am very happy that my preparations for the upcoming race across Germany have been featured in the newspaper "Tageblatt".
            <br />
            The article delves into my training and the efforts that I am putting into preparing for the race. It also highlights the challenges I anticipate facing during the race and the strategies I am using to overcome them.
            <br /><br />

            Reading the article will give you a deeper understanding of the preparations that go into a race like this, and the dedication and hard work required to achieve success.
            So, if you're interested in learning more about my journey and the efforts I am making to prepare for the race across Germany, I invite you to read the full article online and get a glimpse into my training and preparation. Don't miss out!
            </p>
            <div className='ctas'>
                <a href="https://www.tageblatt.de/startseite_artikel,-1100-kilometer-buxtehuder-radsportler-f%C3%A4hrt-quer-durch-deutschland-_arid,2736846.html" target="_blank" rel="noreferrer">Read online</a>
            </div>
        </div>
    </div>
  );
}

export default TageblattSlide;