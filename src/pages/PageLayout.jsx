import Header from '../components/Header';
import FooterReferences from '../components/FooterReferences';
import Button from '../components/Button';
import nextBlueImg from '../assets/images/next-blue.png';

export default function PageLayout({ children, onNext, showFooter = true, hideHeader = false }) {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* scrollable area including header */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {!hideHeader && <Header />}

        <div className="flex-1 px-6 md:px-20 pt-3 md:pt-3 flex flex-col justify-between">
          {children}

          {onNext && (
            <div className="flex justify-end pt-4 md:pt-8 mb-5">
              <Button label="Next" imageUrl={nextBlueImg} onClick={onNext} />
            </div>
          )}
        </div>

        {showFooter && <FooterReferences />}
      </div>

      {/* bottom magenta strip */}
      <div className="h-8 md:h-12 bg-gradient-to-r from-pink-600 to-pink-700 flex-shrink-0"></div>
    </div>
  );
}
