import './MediaSection.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DieZweiteLuftSlide from './slides/DieZweiteLuftSlide';
import './slides/Slides.scss';


function MediaSection() {
  return (
    <section className='MediaSection'>
        <div className='main'>
            <Slide>
                <DieZweiteLuftSlide />
            </Slide>
        </div>
    </section>
  );
}

export default MediaSection;
