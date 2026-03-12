import { useState, useRef } from 'react';
import PageLayout from './PageLayout';
import groupPhoto from '../assets/images/aa-17.png';
import recordingImg from '../assets/images/recording.png';
import pointer from '../assets/images/aa-14.png';
import popuphdr from '../assets/images/popuphdr.png';
import nextwht from '../assets/images/next-wht.png';

// keywords to listen for
const triggers = ['responsible', 'antibiotic', 'use'];

export default function AwareCampaignPledge({ onNext }) {
  const [recording, setRecording] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const recognitionRef = useRef(null);

  const startRecognition = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const recog = new SpeechRecognition();
    recog.lang = 'en-US';
    recog.interimResults = false;
    recog.maxAlternatives = 1;

    recog.onstart = () => {
      setRecording(true);
    };

    recog.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      // if any trigger word is contained, show popup
      if (triggers.some(word => transcript.includes(word))) {
        setShowPopup(true);
      }
    };

    recog.onend = () => {
      setRecording(false);
    };

    recog.onerror = () => {
      setRecording(false);
    };

    recognitionRef.current = recog;
    recog.start();
  };

  return (
    <PageLayout showFooter={false}>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl max-w-4xl w-full text-center overflow-hidden">
            {/* magenta header */}
            <div className="bg-pink-600 h-40"></div>
            {/* icon circle overlapping header */}
            <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={popuphdr} alt="Celebration" className="h-auto w-lg" style={{maxHeight:'220px'}} />
            </div>
            <div className="p-8 pt-16 space-y-6">
              <h2 className="text-5xl font-bold text-pink-600">Congratulations Dr.</h2>
              <p className="text-3xl text-gray-800">
                We are honoured to have you as part of this initiative now.
              </p>
              <button 
                onClick={() => {
                  setShowPopup(false);
                  if (onNext) {
                    onNext();
                    onNext();
                  }
                }}
                className="mt-4 bg-pink-600 text-white px-10 py-3 rounded-full text-2xl font-semibold"
              >
                Next <img src={nextwht} alt="Next" className="h-auto w-lg" style={{marginLeft:'10px', maxHeight:'28px', display:'inline'}} />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-4xl mx-auto text-center space-y-5">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-brandon font-bold leading-snug tracking-tight text-center">
          <span className="text-pink-600 font-black">Be a part of initiative of AWARE</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> campaign and help to prevent antimicrobial resistance</span>
        </h1>
        <p className="text-3xl mt-7 text-black">
          “I support responsible antibiotic use and AMR prevention”
        </p>
        <button
          onClick={startRecognition}
          className="relative mt-0 py-2 bg-white"
        >
          {recording ? (
            <img src={recordingImg} alt="Recording" className="h-16 w-auto bg-blue-600" style={{marginTop:'-15px'}} />
          ) : (
            <span className='relative bg-blue-600 text-white px-8 py-3 text-3xl font-semibold hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500'>Click here and say “Responsible Antibiotic Use” <img src={pointer} alt="Campaign participants" style={{position:'absolute', bottom:'-20px', right:'-20px', width:'55px', height:'auto'}} /></span>
          )}
        </button>
        {/* Skip Button - Visible during recording */}
        {recording && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => {
                // Stop the recording
                if (recognitionRef.current) {
                  recognitionRef.current.stop();
                }
                setRecording(false);
                setShowPopup(false);
                // Navigate to next steps
                if (onNext) {
                  onNext();
                  onNext();
                }
              }}
              className="bg-pink-600 text-white px-8 py-3 text-xl font-semibold hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
            >
              Skip
            </button>
          </div>
        )}
        <img src={groupPhoto} alt="Campaign participants" className="w-full h-auto mt-6 text-center" style={{maxWidth:'80%', margin:'20px auto 0px'}} />
      </div>
    </PageLayout>
  );
}
