import './MediaSection.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DieZweiteLuftSlide from './slides/DieZweiteLuft/DieZweiteLuftSlide';
import './slides/Slides.scss';
import TageblattSlide from './slides/Tageblatt/TageblattSlide';
import MoPoSlide from './slides/MoPo/MoPoSlide';
import YoutubeSlide from './slides/Youtube/YoutubeSlide';


function MediaSection() {
  const onChange = (from, to) => {
    window.dataLayer = window.dataLayer || [];
  };

  return (
    <section className='MediaSection'>
        <div className='main'>
            <Slide easing='ease-out' transitionDuration={800} onChange={onChange}>
                <DieZweiteLuftSlide />
                <YoutubeSlide />
                <TageblattSlide />
                <MoPoSlide /> 
            </Slide>
        </div>
    </section>
  );
}

export default MediaSection;
