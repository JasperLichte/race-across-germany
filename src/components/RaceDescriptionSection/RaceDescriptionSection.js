import './RaceDescriptionSection.scss';
import map from './map.png';

function RaceDescriptionSection() {
  return (
    <section className='RaceDescriptionSection' id='about-the-race'>
      <div className='main'>
        <img src={map} alt="Map" className='map'/>
        <div className='keywords'>
          <h2 className='no-border'>
            Race<br />Across<br />Germany
            
            <span>1100km</span>
            <span>Flensburg</span>
            <span>Non-stop</span>
            <span>RAAM</span>
            <span>Solo-supported</span>
            <span>Garmisch-<br/>Partenkirchen</span>
            <span>7800m</span>
            <span>July 7th</span>
            <span>Ultracycling</span>
          </h2>

        </div>
      </div>
    </section>
  );
}

export default RaceDescriptionSection;
