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
            </div>
            <div>
                <p>Martin Duscha</p>
                <span>Team manager & organizer</span>
            </div>
            <div>
                <p>Phillip Wieckowski</p>
                <span>Bike mechanic</span>
            </div>
            <div>
                <p>Merle Neitzel</p>
                <span>Physiotherapist</span>
            </div>
            <div>
                <p>Mona Flathmann</p>
                <span>Motivation & Navigation</span>
            </div>
            <div>
                <p>Christian Walter</p>
                <span>Navigation & Nutrition</span>
            </div>
            <div>
                <p>Johann Schäning</p>
                <span>Performance & Nutrition</span>
            </div>
            <div>
                <p>Josephine Noack</p>
                <span>Head Coach & Sports Scientist</span>
            </div>
            <div>
                <p>Maximilian Planer</p>
                <span>Mental Coach</span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
