import './MediaSection.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DieZweiteLuftSlide from './slides/DieZweiteLuftSlide';
import './slides/Slides.scss';
import TageblattSlide from './slides/TageblattSlide';
import MoPoSlide from './slides/MoPoSlide';


function MediaSection() {
  const onChange = (from, to) => {
    window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   event: 'Generic Event',
    //   event_name: 'media_slider_next',
    //   media_slider_next : {
    //       from_slide: from,
    //       to_slide: to, 
    //   }
    // });
  };

  return (
    <section className='MediaSection'>
        <div className='main'>
            <Slide easing='ease-out' transitionDuration={800} onChange={onChange}>
                <DieZweiteLuftSlide />
                <TageblattSlide />
                <MoPoSlide /> 
            </Slide>
        </div>
    </section>
  );
}

export default MediaSection;
