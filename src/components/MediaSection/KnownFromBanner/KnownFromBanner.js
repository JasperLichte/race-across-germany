import './KnownFromBanner.scss';
import mopo from './logos/mopo.webp';
import ndr from './logos/ndr.png';
import spotify from './logos/spotify.svg';
import youtube from './logos/youtube.svg';
import tageblatt from './logos/tageblatt.svg';

function KnownFromBanner() {
  return (
    <div className='KnownFromBanner'>
        <h4>As known among others from</h4>
        <div className='logos'>
            <a href='https://www.ndr.de/'><img src={ndr} alt="NDR" /></a>
            <a href='https://www.mopo.de/'><img src={mopo} alt="Morgenpost" /></a>
            <a href='https://open.spotify.com/'><img src={spotify} alt="Spotify" className='spotify' /></a>
            <a href='https://www.youtube.com/@teamlichte'><img src={youtube} alt="YouTube" className='youtube' /></a>
            <a href='https://www.tageblatt.de/'><img src={tageblatt} alt="Tageblatt" className='tageblatt' /></a>
            
        </div>
    </div>
  );
}

export default KnownFromBanner;
