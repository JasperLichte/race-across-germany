import './PartnerBanner.scss';
import depressionshilfe from './logos/deutscheDepressionsHilfe.png';
import dfwi from './logos/dfwi.svg';
import kickstart from './logos/kickstart-in-it.svg';
import velopunkt from './logos/velopunkt.png';
import noack from './logos/noack-sport-support.png';
import maxplaner from './logos/maxplaner.png';

function PartnerBanner({animation, iconSize}) {
  return (
    <div className={`PartnerBanner ${animation === false ? 'no-animation' : ''} ${iconSize || ''}`}>
        <a href='https://www.kickstart-in.it/'><img src={kickstart} className='kickstart' alt='KICKstart in IT' /></a>  
        <a href='https://www.maxplaner.com/'><img src={maxplaner} className='maxplaner' alt='Max Planer' /></a>
        <a href='https://velopunkt.com/'><img src={velopunkt} className='velopunkt' alt='Velo.' /></a>
        <a href='https://www.dfwi.de/'><img src={dfwi} className='dfwi' alt='DFWI'/></a>
        <a href='https://noacksportsupport.de/'><img src={noack} className='noack' alt='Noack Sport Support' /></a>
        <a href='https://www.deutsche-depressionshilfe.de/start'><img src={depressionshilfe} className='depressionshilfe' alt='Deutsche Depressionshilfe' /></a>
    </div>
  );
}

export default PartnerBanner;
