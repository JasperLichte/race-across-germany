import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/Header/Header'
import RaceDescriptionSection from './components/RaceDescriptionSection/RaceDescriptionSection';
import PartnerBanner from './components/PartnerBanner/PartnerBanner';
import AthleteSection from './components/AthleteSection/AthleteSection';
import TeamSection from './components/TeamSection/TeamSection';
import GoalSection from './components/GoalSection/GoalSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RaceDescriptionSection />
    <PartnerBanner />
    <AthleteSection />
    <TeamSection />
    <GoalSection />
  </React.StrictMode>
);
