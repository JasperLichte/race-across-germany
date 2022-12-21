import './RaceDescriptionSection.scss';
import map from './map.png';

function RaceDescriptionSection() {
  return (
    <section className='RaceDescriptionSection'>
      <div className='main'>
        <p>
          <h2>About the Race</h2>
          The Race Across Germany is an endurance cycling event that covers over <strong>1,100 kilometres</strong> of challenging terrain in Germany.
          It is a <strong>non-stop</strong> race that requires riders to traverse a variety of landscapes, including mountains, forests, and urban areas.
          The event is designed for experienced and dedicated cyclists who are looking for a truly grueling and rewarding challenge.
          It attracts a diverse field of <strong>participants from around the world</strong>, including amateur and professional riders.
          <br/><br/>
          <p className='for-sponsors'>
            Sponsorship of the Race Across Germany provides an excellent opportunity for companies to reach a passionate and engaged audience of cycling enthusiasts.
            Sponsors have the opportunity to showcase their products and services to a large and loyal audience, as well as to demonstrate their commitment to promoting healthy, 
            active lifestyles and supporting the cycling community.<br/>
            In addition to on-course branding and visibility, sponsors can also benefit from a range of marketing and promotional opportunities, including social media promotion, 
            website exposure, and media coverage.<br/>
            Overall, the Race Across Germany is a high-profile and exciting event that offers a unique platform for companies looking to build brand awareness 
            and connect with a dedicated and passionate audience.
          </p>
        </p>
        <img src={map} alt="Map" className='map'/>
      </div>
    </section>
  );
}

export default RaceDescriptionSection;
