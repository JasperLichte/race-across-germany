import './TeamSection.scss';

const teamMembers = [
    {
        short: 'jasper',
        name: 'Jasper Lichte',
        title: 'Athlete',
        socials: {
            instagram: 'https://www.instagram.com/jasper.cycling',
            strava: 'https://www.strava.com/athletes/40292803',
            mail: 'mailto:jasper@lichte.info',
        }
    },
    {
        short: 'martin',
        name: 'Martin Duscha',
        title: 'Team Manager & Organizer',
        socials: {
            instagram: 'https://www.instagram.com/maaadinhh',
            strava: 'https://www.strava.com/athletes/21472500',
            mail: 'mailto:martin@velopunkt.com',
        }
    },
    {
        short: 'phillip',
        name: 'Phillip Wieckowski',
        title: 'Bike Mechanic',
        socials: {
            instagram: 'https://www.instagram.com/phillip_auf_bike',
        }
    },
    {
        short: 'merle',
        name: 'Merle Neitzel',
        title: 'Physiotherapist',
        socials: {
            instagram: 'https://www.instagram.com/merle_n_',
        }
    },
    {
        short: 'mona',
        name: 'Mona Flathmann',
        title: 'Motivation & Navigation',
        socials: {
            instagram: 'https://www.instagram.com/mona_flathmann',
            strava: 'https://www.strava.com/athletes/52675975',
        }
    },
    {
        short: 'christian',
        name: 'Christian Walter',
        title: 'Navigation & Nutrition',
        socials: {
            instagram: 'https://www.instagram.com/christian.cycling',
            strava: 'https://www.strava.com/athletes/53339058',
        }
    },
    {
        short: 'johann',
        name: 'Johann Schäning',
        title: 'Performance & Nutrition',
        socials: {
            instagram: 'https://www.instagram.com/johannschaning',
            strava: 'https://www.strava.com/athletes/58115319',
        }
    },
    {
        short: 'josephine',
        name: 'Josephine Noack',
        title: 'Head Coach & Sports Scientist',
        socials: {
            instagram: 'https://www.instagram.com/josephine.noack',
            strava: 'https://www.strava.com/athletes/24473648',
        }
    },
];

function TeamSection() {
  return (
    <section className='TeamSection' id='the-team'>
      <div className='main'>
        <h2>The Team</h2>
        <p className='introduction'>
            We are a dedicated group of <strong>sports enthusiasts</strong> who are passionate about pushing ourselves to the limits and tackling some of the
            most challenging cycling events in the world.
            <br/>
            <br/>
            Jasper is joined by a team of <strong>eight support personnel</strong>, all of whom are committed to helping him perform at the highest level.
            <br/>
            In addition to our rider and support team, we will also be using <strong>two support vehicles</strong> to help us navigate the course and provide us with the necessary
            supplies and support to compete at the highest level. Our goal is to win the <i>Race Across Germany</i>, and we are confident in our ability to do so with
            the right combination of hard work, determination, and team cohesion.
            <br/>
            <br/>
            We are excited to embark on this journey and grateful for the opportunity to compete in this prestigious event!
        </p>
        <div className='cards'>
            {teamMembers.map(m => (<div key={m.short} className={`card ${m.short}`}>
                <div className='img' />
                <div className='info'>
                    <p>{m.name}</p>
                    <br/>
                    <span>{m.title}</span>
                    <div className='socials'>
                        {Object.keys(m.socials).map(k => (
                            <a key={k} className={k} href={m.socials[k]} target='_blank' rel='noreferrer'>.</a>
                        ))}
                    </div>
                </div>
            </div>))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
