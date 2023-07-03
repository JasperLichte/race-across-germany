import { useEffect, useState } from 'react';
import Header from './Header/Header'
import RaceDescriptionSection from './RaceDescriptionSection/RaceDescriptionSection';
import PartnerBanner from './PartnerBanner/PartnerBanner';
import AthleteSection from './AthleteSection/AthleteSection';
import TeamSection from './TeamSection/TeamSection';
import GoalSection from './GoalSection/GoalSection';
import CharitySection from './CharitySection/CharitySection';
import SupportSection from './SupportSection/SupportSection';
import Footer from './Footer/Footer';
import EventCountdown from './EventCountdown/EventCountdown';
import MediaSection from './MediaSection/MediaSection';
import PrideFlag from './PrideFlag/PrideFlag';
import UsefulLinksSection from './UsefulLinksSection/UsefulLinksSection';

const eventDate = new Date('2023/07/07 08:44');

function App({location}) {
    const [ms, setMs] = useState(1);

    useEffect(() => {
        setInterval(() => {
            setMs(eventDate - new Date());
        }, 1000);
    }, []);

    
    useEffect(
        () => {
            const element = document.getElementById(location.hash.replace("#", ""));

            setTimeout(() => {
                window.scrollTo({
                behavior: element ? "smooth" : "auto",
                top: element ? element.offsetTop : 0
                });
            }, 100);
        },
        [location]
    );

    return (
        <>
            <Header />
            <PrideFlag />
            <PartnerBanner />
            <UsefulLinksSection />
            <RaceDescriptionSection />
            {ms > 0 && <EventCountdown eventDate={eventDate} msLeft={ms} />}
            <MediaSection />
            <AthleteSection />
            <TeamSection />
            <GoalSection />
            <CharitySection />
            <SupportSection />
            <Footer />
            <PartnerBanner />
            <PrideFlag />
        </>
    );
}

export default App;
