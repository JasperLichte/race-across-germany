import './RaceDescriptionSection.scss';
import map from './map.png';

function RaceDescriptionSection() {
  return (
    <section className='RaceDescriptionSection'>
      <div className='main'>
        <p>
          <h2>About the Race</h2>
          <strong>"Race Across Germany"</strong> is an annual ultracycling race across Germany.
        The next edition of the race will start on <strong>July 7, 2023</strong> in Flensburg and finish in Garmisch-Partenkirchen.
        It will cover a distance of <strong>1,100 kilometers</strong>, with <strong>7,500 meters of altitude</strong>, and have a time limit of 60 hours.<br/>
        This ultra-cycling race across Germany is an official event, taking place on a fixed route, with rules and official race management.
        </p>
        <img src={map} alt="Map" className='map'/>
      </div>
    </section>
  );
}

export default RaceDescriptionSection;
