import './TeamSection.scss';

function TeamSection() {
  return (
    <section className='TeamSection'>
      <div className='main'>
        <h2>The Team</h2>
        <p className='introduction'>
            We are a dedicated group of <strong>sports enthusiasts</strong> who are passionate about pushing ourselves to the limits and tackling some of the
            most challenging cycling events in the world.
            <br/>
            <br/>
            Jasper is joined by a team of <strong>seven support personnel</strong>, all of whom are committed to helping him perform at the highest level.
            <br/>
            In addition to our rider and support team, we will also be using <strong>two support vehicles</strong> to help us navigate the course and provide us with the necessary
            supplies and support to compete at the highest level. Our goal is to win the <i>Race Across Germany</i>, and we are confident in our ability to do so with
            the right combination of hard work, determination, and team cohesion.
            <br/>
            <br/>
            We are excited to embark on this journey and grateful for the opportunity to compete in this prestigious event!
        </p>
        <div className='cards'>
            <div>
                <p>Jasper Lichte</p>
                <span>Athlete</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/jasper.cycling">instagram</a>
                    <a className='strava' href="https://www.strava.com/athletes/40292803">strava</a>
                    <a className='mail' href="mailto:jasper@lichte.info">mail</a>
                </div>
            </div>
            <div>
                <p>Martin Duscha</p>
                <span>Team manager & organizer</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/maaadinhh">instagram</a>
                    <a className='strava' href="https://www.strava.com/athletes/21472500">strava</a>
                    <a className='mail' href="mailto:martin@velopunkt.com">mail</a>
                </div>
            </div>
            <div>
                <p>Phillip Wieckowski</p>
                <span>Bike mechanic</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/phillip_auf_bike">instagram</a>
                </div>
            </div>
            <div>
                <p>Merle Neitzel</p>
                <span>Physiotherapist</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/merle_n_">instagram</a>
                </div>
            </div>
            <div>
                <p>Mona Flathmann</p>
                <span>Motivation & Navigation</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/mona_flathmann">instagram</a>
                    <a className='strava' href="https://www.strava.com/athletes/52675975">strava</a>
                </div>
            </div>
            <div>
                <p>Christian Walter</p>
                <span>Navigation & Nutrition</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/christian.cycling">instagram</a>
                    <a className='strava' href="https://www.strava.com/athletes/53339058">strava</a>
                </div>
            </div>
            <div>
                <p>Johann Schäning</p>
                <span>Performance & Nutrition</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/johannschaning">instagram</a>
                    <a className='strava' href="https://www.strava.com/athletes/58115319">strava</a>
                </div>
            </div>
            <div>
                <p>Josephine Noack</p>
                <span>Head Coach & Sports Scientist</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/josephine.noack">instagram</a>
                    <a className='strava' href="https://www.strava.com/athletes/24473648">strava</a>
                </div>
            </div>
            <div>
                <p>Maximilian Planer</p>
                <span>Mental Coach</span>
                <div className='socials'>
                    <a className='instagram' href="https://www.instagram.com/maxplaner">instagram</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
