import './AthleteSection.scss';

function AthleteSection() {
  return (
    <section className='AthleteSection'>
        <div className='main'>
            <h2>The Athlete <span>Jasper Lichte</span></h2>
            <p>
                In addition to his full-time job as <i>Head Coach for Software Engineering</i>, Jasper has been actively involved in competitive sports for many years.
                In rowing, which he pursued very ambitiously until early 2022, Jasper has been able to celebrate some great successes.
                In his first season on the bike, he was able to make a name for himself in several races.
            </p>
            <h3>Previous achievements</h3>
            <div className='achievements'>
                <div className='cycling'>
                    <h4>Cycling</h4>
                    <ul>
                        <li>
                            <p>1st place 24h Race</p>
                            <span>Rad am Ring, Nürburg, 2022</span>
                        </li>
                        <li>
                            <p>1st place 12h Race</p>
                            <span>Guderhandviertel, Old country, 2022</span>
                        </li>
                        <li>
                            <p>2nd Hamburg-Berlin-Time-Trial</p>
                            <span>Hamburg, 2022</span>
                        </li>
                        <li>
                            <p>Hamburg - Salzburg unsupported in 3 days</p>
                            <span>1,100km, 2022</span>
                        </li>
                    </ul>
                </div>
                <div className='rowing'>
                    <h4>Rowing</h4>
                    <ul>
                        <li>
                            <p>2nd place at the Long Distance World Championships</p>
                            <span>Tour du Lac Léman, Genf, 2021</span>
                        </li>
                        <li>
                            <p>2nd place at the North German Championships</p>
                            <span>Friedrichstadt, 2020</span>
                        </li>
                        <li>
                            <p>1st & 2nd place in the Elfsteden Roeimarathon over 212km</p>
                            <span>Leeuwarden, 2019 & 2022</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}

export default AthleteSection;
