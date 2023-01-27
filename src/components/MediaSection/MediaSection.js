import './MediaSection.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DieZweiteLuftSlide from './slides/DieZweiteLuftSlide';
import './slides/Slides.scss';
import TageblattSlide from './slides/TageblattSlide';
import MoPoSlide from './slides/MoPoSlide';


function MediaSection() {
  return (
    <section className='MediaSection'>
        <div className='main'>
            <Slide easing='ease-out' transitionDuration={800}>
                <DieZweiteLuftSlide />
                <TageblattSlide />
                <MoPoSlide />
            </Slide>
        </div>
    </section>
  );
}

export default MediaSection;
