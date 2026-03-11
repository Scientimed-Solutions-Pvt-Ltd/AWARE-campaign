import PageLayout from './PageLayout';
import clapIcon from '../assets/images/popuphdr.png';

export default function CongratsPage({ onNext }) {
  return (
    <PageLayout>
      {/* overlay card */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-8 max-w-md w-full text-center space-y-6">
          <img src={clapIcon} alt="Celebration" className="h-20 w-20 mx-auto" />
          <h2 className="text-3xl font-bold text-pink-600">Congratulations Dr.</h2>
          <p className="text-lg text-gray-800">
            We are honoured to have you as part of this initiative now.
          </p>
          {onNext && <button onClick={onNext} className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg text-xl font-semibold">Next &gt;</button>}
        </div>
      </div>
    </PageLayout>
  );
}
