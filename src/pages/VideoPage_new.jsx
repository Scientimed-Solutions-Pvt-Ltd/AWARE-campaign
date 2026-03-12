import PageLayout from './PageLayout';

export default function AwareCampaignVideo({ onNext }) {
  return (
    <PageLayout onNext={onNext} showFooter={false}>
      <div className="w-full max-w-4xl mx-auto text-center" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 2vh, 20px)' }}>
        <h1 className="text-h1 leading-snug tracking-tight text-center">
          <span className="text-pink-600 font-black">AWARE</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> Campaign Video</span>
        </h1>
      
      </div>

      {/* video container with double border: outer blue, inner pink */}
      <div className="w-full max-w-5xl mx-auto mt-[4vh]" style={{border: 'clamp(12px, 3vw, 24px) solid #0099d9'}}>
        <div style={{border: 'clamp(4px, 1vw, 10px) solid #b6236c'}}>
          <div className="bg-white flex items-center justify-center" style={{
            height: 'clamp(200px, 40vh, 400px)'
          }}>
            <span className="text-gray-500 italic" style={{fontSize: 'clamp(14px, 2vw, 18px)'}}>
              (Video would appear here)
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
