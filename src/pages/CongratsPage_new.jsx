import PageLayout from './PageLayout';
import clapIcon from '../assets/images/popuphdr.png';

export default function CongratsPage({ onNext }) {
  return (
    <PageLayout>
      {/* overlay card */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-[2vw]">
        <div className="bg-white rounded-xl p-[3vw] max-w-md w-full text-center" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(16px, 3vh, 24px)' }}>
          <img src={clapIcon} alt="Celebration" className="mx-auto" style={{
            height: 'clamp(60px, 10vh, 80px)',
            width: 'auto'
          }} />
          <h2 className="text-h2 text-pink-600">Congratulations Dr.</h2>
          <p className="text-body-lg text-gray-800">
            We are honoured to have you as part of this initiative now.
          </p>
          {onNext && (
            <button 
              onClick={onNext} 
              className="mt-[2vh] bg-pink-600 text-white rounded-lg font-semibold"
              style={{
                padding: 'clamp(8px, 1.5vh, 16px) clamp(12px, 2vw, 24px)',
                fontSize: 'clamp(16px, 2.5vw, 20px)'
              }}
            >
              Next &gt;
            </button>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
