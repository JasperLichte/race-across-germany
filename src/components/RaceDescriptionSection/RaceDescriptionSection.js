import './RaceDescriptionSection.scss';
import map from './map.png';

function RaceDescriptionSection() {
  return (
    <section className='RaceDescriptionSection'>
      <div className='main'>
        <p>
          <h2>About the Race</h2>
          <i>Race Across Germany</i> is an endurance cycling event that covers over <strong>1,100 kilometres</strong> of challenging terrain in Germany.
          It is a <strong>non-stop</strong> race that requires riders to traverse a variety of landscapes, including mountains, forests, and urban areas.
          The event is designed for experienced and dedicated cyclists who are looking for a truly grueling and rewarding challenge.
          It attracts a diverse field of <strong>participants from around the world</strong>.
          <br/><br/>
          Participants in the <i>Race Across Germany</i> must be prepared for the <strong>physical and mental demands</strong> of cycling for extended periods of time.
          In addition to the physical demands, the <i>Race Across Germany</i> also requires participants to be mentally tough. The race is known for its 
          <strong>unpredictable weather</strong>, which can range from sweltering heat to freezing rain. Riders must also deal with the mental strain of 
          being on the road for such a long period of time, and must find ways to stay motivated and focused.
          <br/><br/>
          Despite these challenges, the <i>Race Across Germany</i> is a popular event that attracts a <strong>wide range of riders</strong>.
          Whether an individual is a seasoned professional or a dedicated amateur, the race offers an opportunity to challenge oneself to the limits and test endurance.
        </p>
        <img src={map} alt="Map" className='map'/>
      </div>
    </section>
  );
}

export default RaceDescriptionSection;
