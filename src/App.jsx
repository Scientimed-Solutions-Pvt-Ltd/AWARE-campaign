import { useState } from 'react';
import AMRPage from './pages/AMRPage';
import AccessWatchReservePage from './pages/AccessWatchReservePage';
import VideoPage from './pages/VideoPage';
import CallToActionPage from './pages/CallToActionPage';
import CongratsPage from './pages/CongratsPage';
import PortfolioPage from './pages/PortfolioPage';

const pages = [
  AMRPage,
  AccessWatchReservePage,
  VideoPage,
  CallToActionPage,
  CongratsPage,
  PortfolioPage
];

function App() {
  const [index, setIndex] = useState(0);
  const Current = pages[index] || (() => <div />);

  const next = () => {
    setIndex((i) => Math.min(pages.length - 1, i + 1));
  };

  return <Current onNext={next} />;
}

export default App


