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

        <div className="flex-1 px-[3vw] md:px-[7vw] pt-[2vh] md:pt-[1vh] flex flex-col justify-start space-y-1 sm:space-y-2">
          {children}

          {onNext && (
            <div className="flex justify-end pt-[3vh] md:pt-[4vh] mb-[2vh]">
              <Button label="Next" imageUrl={nextBlueImg} onClick={onNext} />
            </div>
          )}
        </div>

        {showFooter && <FooterReferences />}

        {/* bottom magenta strip */}
        <div className="h-[3vh] md:h-[4vh] bg-gradient-to-r from-pink-600 to-pink-700 flex-shrink-0"></div>
      </div>
    </div>
  );
}
