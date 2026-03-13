import PageLayout from './PageLayout';
import pillIcon from '../assets/images/ico03.png';
import clipboardIcon from '../assets/images/ico04.png';
import shieldIcon from '../assets/images/ico05.png';
// layout provides the Next button automatically

export default function AwareCampaignInfo({ onNext }) {
  const items = [
    {
      icon: pillIcon,
      label: 'Access',
      description: 'Choose the right antibiotic at the right time'
    },
    {
      icon: clipboardIcon,
      label: 'Watch',
      description: 'Track patient response and detect resistance early'
    },
    {
      icon: shieldIcon,
      label: 'Reserve',
      description: 'Preserve newer-generation antibiotics for critical, life-threatening infections'
    }
  ];

  return (
    <PageLayout onNext={onNext} showFooter={false}>
      {/* heading text matching Home design */}
      <div className="w-full max-w-4xl mx-auto text-center space-y-3">
        <h1 className="text-[5.5vw] sm:text-[2vw] md:text-[5vw] lg:text-[3vw] xl:text-[2.5vw] leading-5 tracking-tight text-center">
          <span className="text-pink-600 font-black">AWARE</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> Campaign</span>
        </h1>
        <p className="text-[4vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.2vw] xl:text-[1.7vw] text-gray-700 leading-[4.5vw] sm:leading-[4.5vw] md:leading-[4vw] lg:leading-[3vw] xl:leading-[2vw]">
          Promoting AMR awareness and empowering healthcare professionals for responsible antimicrobial practices
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-2 mt-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center flex-col sm:flex-col md:flex-row gap-0 sm:gap-1 md:gap-5">
            <img src={item.icon} alt={item.label} className="h-16 w-16 flex-shrink-0" />

            {/* label in blue box */}
            <div className="bg-blue-600 text-white font-semibold text-xl py-1 px-6 sm:py-3 text-center" style={{minWidth:'130px'}}>
              {item.label}
            </div>

            {/* description inside bordered rectangle */}
            <div className="flex-1 border border-blue-600 text-xl text-gray-800 px-2 py-1 sm:px-4 sm:py-3 md:px-4 md:py-3 text-center sm:text-center md:text-left " >
              {item.description}
            </div>
          </div>
        ))}
      </div>
      {/* highlighted call to action text centered horizontally */}
      <div className="w-full mt-2 flex justify-center">
        <div className="bg-pink-600 text-white text-2xl font-bold px-8 py-2 text-center sm:text-left">
          Awareness before it’s too late
        </div>
      </div>    </PageLayout>
  );
}
