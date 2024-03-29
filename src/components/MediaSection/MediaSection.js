import './MediaSection.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DieZweiteLuftSlide from './slides/DieZweiteLuft/DieZweiteLuftSlide';
import './slides/Slides.scss';
import TageblattSlide from './slides/Tageblatt/TageblattSlide';
import MoPoSlide from './slides/MoPo/MoPoSlide';
import YoutubeSlide from './slides/Youtube/YoutubeSlide';
import KnownFromBanner from './KnownFromBanner/KnownFromBanner';
import NDRSlide from './slides/NDR/NDRSlide';


function MediaSection() {
  return (
    <section className='MediaSection'>
        <div className='main'>
          <h2>News</h2>
          <KnownFromBanner />
          <Slide easing='ease-out' transitionDuration={800}>
            <NDRSlide />
            <YoutubeSlide />
            <DieZweiteLuftSlide />
            <TageblattSlide />
            <MoPoSlide /> 
          </Slide>
        </div>
    </section>
  );
}

export default MediaSection;
