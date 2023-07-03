import './NDRSlide.scss';

function NDRSlide() {
    return (
        <div className="custom-slide each-slide-effect NDRSlide">
            <div className='image'>
                <div className='logo'></div>
            </div>
            <div className='description'>
                <p>
                    During our preparations for the upcoming race across Germany, the <strong>NDR</strong> accompanied us on an exhilarating test ride. 
                    <br /><br />
                    Their dedicated team of reporters joined us as we navigated through the night, fine-tuned our equipment, and tested our endurance.
                    The <strong>NDR</strong>'s comprehensive coverage showcased the challenges we encountered and the teamwork required to overcome them.
                    <br /><br />
                    We extend our gratitude to the <strong>NDR</strong> for their support and for sharing our exhilarating journey with a wide audience.
                </p>
                <div className='ctas'>
                    <a href="https://www.ndr.de/nachrichten/niedersachsen/lueneburg_heide_unterelbe/1100-Kilometer-Jasper-Lichte-startet-beim-Race-Across-Germany,raceacrossgermany100.html" target="_blank" rel="noreferrer">Read online</a>
                </div>
            </div>
        </div>
    );
}

export default NDRSlide;