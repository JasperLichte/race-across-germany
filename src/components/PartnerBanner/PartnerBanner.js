import './PartnerBanner.scss';
import noack from './logos/noack-sport-support.png';
import maxplaner from './logos/maxplaner.png';
import sportimport from './logos/sport-import.svg';
import h1media from './logos/h1media.png'
import aerycs from './logos/aerycs.png';
import mucoff from './logos/mucoff.png';
import webxells from './logos/webxells.svg';

function PartnerBanner({animation, iconSize}) {
  return (
    <div className={`PartnerBanner ${animation === false ? 'no-animation' : ''} ${iconSize || ''}`}>
        <a href='https://noacksportsupport.de/'><img src={noack} className='noack' alt='Noack Sport Support' /></a>
        <a href='https://www.sportimport.de/'><img src={sportimport} className='sportimport' alt='Sport Import' /></a>
        <a href='https://aerycs.de/'><img src={aerycs} className='aerycs' alt='Aerycs' /></a>
        <a href='https://www.webxells.com/'><img src={webxells} className='webxells' alt='webXells' /></a>
        <a href='https://muc-off.com/'><img src={mucoff} className='mucoff' alt='Muc-Off' /></a>
        <a href='https://www.maxplaner.com/'><img src={maxplaner} className='maxplaner' alt='Max Planer' /></a>
        <a href='http://www.h1e.eu/'><img src={h1media} className='h1media' alt='H1Media' /></a>
    </div>
  );
}

export default PartnerBanner;
