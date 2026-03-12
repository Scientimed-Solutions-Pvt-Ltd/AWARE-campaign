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
      <div className="w-full max-w-4xl mx-auto text-center" style={{ gap: 'clamp(12px, 2vh, 20px)', display: 'flex', flexDirection: 'column' }}>
        <h1 className="text-h1 leading-snug tracking-tight text-center">
          <span className="text-pink-600 font-black">AWARE</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> Campaign</span>
        </h1>
        <p className="text-body-lg">
          Promoting AMR awareness and empowering healthcare professionals for responsible antimicrobial practices
        </p>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-[4vh]" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 4vh, 32px)' }}>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center" style={{ gap: 'clamp(12px, 3vw, 24px)' }}>
            <img src={item.icon} alt={item.label} className="flex-shrink-0" style={{
              width: 'clamp(64px, 12vw, 96px)',
              height: 'clamp(64px, 12vw, 96px)'
            }} />

            {/* label in blue box */}
            <div className="bg-blue-600 text-white font-semibold text-center" style={{
              minWidth: 'clamp(100px, 15vw, 160px)',
              padding: 'clamp(8px, 1.5vh, 16px) clamp(8px, 1.5vw, 16px)',
              fontSize: 'clamp(18px, 3vw, 24px)'
            }}>
              {item.label}
            </div>

            {/* description inside bordered rectangle */}
            <div className="flex-1 border border-blue-600 text-gray-800" style={{
              padding: 'clamp(8px, 1.5vw, 16px)',
              fontSize: 'clamp(16px, 2.5vw, 22px)'
            }}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
      {/* highlighted call to action text centered horizontally */}
      <div className="w-full mt-[4vh] flex justify-center">
        <div className="bg-pink-600 text-white font-bold" style={{
          padding: 'clamp(12px, 2vh, 20px) clamp(16px, 3vw, 32px)',
          fontSize: 'clamp(20px, 4vw, 32px)'
        }}>
          Awareness before it's too late dfdfdff
        </div>
      </div>
    </PageLayout>
  );
}
