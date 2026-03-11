import PageLayout from './PageLayout';

export default function VideoPage({ onNext }) {
  return (
    <PageLayout onNext={onNext} showFooter={false}>
      <div className="w-full max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-brandon font-bold leading-snug tracking-tight text-center">
          <span className="text-pink-600 font-black">AWARE</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> Campaign Video</span>
        </h1>
      
      </div>

      {/* video container with double border: outer blue, inner pink */}
      <div className="w-full max-w-5xl mx-auto mt-12" style={{border: '20px solid #0099d9'}}>
        <div style={{border: '7px solid #b6236c'}}>
          <div className="h-64 md:h-96 bg-white flex items-center justify-center">
            <span className="text-gray-500 italic">(Video would appear here)</span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
