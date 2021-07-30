import React from 'react';
import { SplashPage } from './Splash/SplashPage';
import { TheGame } from './Game/TheGame'
import GoalPage from './Goal/GoalPage';
import MeetUs from './MeetUs/MeetUs'

const LandingPage = () => {
  return (
    <div>
      <SplashPage />
      <TheGame />
      <GoalPage />
      <MeetUs />

    </div>
  );
};

export default LandingPage;