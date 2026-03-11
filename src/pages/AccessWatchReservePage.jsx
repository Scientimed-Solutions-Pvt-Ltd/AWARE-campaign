import PageLayout from './PageLayout';
import pillIcon from '../assets/images/ico03.png';
import clipboardIcon from '../assets/images/ico04.png';
import shieldIcon from '../assets/images/ico05.png';
// layout provides the Next button automatically

export default function AccessWatchReservePage({ onNext }) {
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
      {/* heading text matching AMRPage design */}
      <div className="w-full max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-brandon font-bold leading-snug tracking-tight text-center">
          <span className="text-pink-600 font-black">AWARE</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> Campaign</span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-700">
          Promoting AMR awareness and empowering healthcare professionals for responsible antimicrobial practices
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto space-y-8 mt-12">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-6">
            <img src={item.icon} alt={item.label} className="h-24 w-24 flex-shrink-0" />

            {/* label in blue box */}
            <div className="bg-blue-600 text-white font-semibold text-2xl px-6 py-3 text-center" style={{minWidth:'130px'}}>
              {item.label}
            </div>

            {/* description inside bordered rectangle */}
            <div className="flex-1 border border-blue-600 text-2xl text-gray-800 px-4 py-3">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      {/* highlighted call to action text centered horizontally */}
      <div className="w-full mt-12 flex justify-center">
        <div className="bg-pink-600 text-white text-3xl font-bold px-8 py-4">
          Awareness before it’s too late
        </div>
      </div>    </PageLayout>
  );
}
