import { useState, useEffect } from 'react';
import Home from './pages/Home';
import AwareCampaignInfo from './pages/AwareCampaignInfo';
import AwareCampaignVideo from './pages/AwareCampaignVideo';
import AwareCampaignPledge from './pages/AwareCampaignPledge';
import AwareCampaignPortfolio from './pages/AwareCampaignPortfolio';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/aware-campaign-info', name: 'info', component: AwareCampaignInfo },
  { path: '/aware-campaign-video', name: 'video', component: AwareCampaignVideo },
  { path: '/aware-campaign-pledge', name: 'pledge', component: AwareCampaignPledge },
  { path: '/portfolio', name: 'portfolio', component: AwareCampaignPortfolio }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Initialize from URL on mount
  useEffect(() => {
    const path = window.location.pathname;
    const routeIndex = routes.findIndex(route => route.path === path);
    if (routeIndex !== -1) {
      setCurrentIndex(routeIndex);
    }
  }, []);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const routeIndex = routes.findIndex(route => route.path === path);
      if (routeIndex !== -1) {
        setCurrentIndex(routeIndex);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNext = () => {
    const nextIndex = Math.min(routes.length - 1, currentIndex + 1);
    setCurrentIndex(nextIndex);
    window.history.pushState({}, '', routes[nextIndex].path);
  };

  const CurrentComponent = routes[currentIndex].component;

  return <CurrentComponent onNext={handleNext} />;
}

export default App


