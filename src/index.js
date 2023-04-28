import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/Header/Header'
import RaceDescriptionSection from './components/RaceDescriptionSection/RaceDescriptionSection';
import PartnerBanner from './components/PartnerBanner/PartnerBanner';
import AthleteSection from './components/AthleteSection/AthleteSection';
import TeamSection from './components/TeamSection/TeamSection';
import GoalSection from './components/GoalSection/GoalSection';
import CharitySection from './components/CharitySection/CharitySection';
import SupportSection from './components/SupportSection/SupportSection';
import Footer from './components/Footer/Footer';
import EventCountdown from './components/EventCountdown/EventCountdown';
import MediaSection from './components/MediaSection/MediaSection';
import PrideFlag from './components/PrideFlag/PrideFlag';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <PrideFlag />
    <PartnerBanner />
    <RaceDescriptionSection />
    <EventCountdown />
    <MediaSection />
    <AthleteSection />
    <TeamSection />
    <GoalSection />
    <CharitySection />
    <SupportSection />
    <Footer />
    <PartnerBanner />
    <PrideFlag />
  </React.StrictMode>
);
