import InfoBlock from './InfoBlock';
import globeIcon from '../assets/images/ico01.png';
import dnaIcon from '../assets/images/ico02.png';

export default function AMRContent() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col space-y-12 md:space-y-16">
      {/* Main Heading - Properly Centered */}
      <div className="w-full">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-brandon font-bold leading-snug tracking-tight text-center">
          <span className="text-pink-600 font-black">Antimicrobial resistance (AMR)</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> is one of the top 10 global public health threats <sup><a href='#ref'>1</a></sup></span>
        </h1>
      </div>

      {/* Info Blocks Container */}
      <div className="flex flex-col space-y-6 md:space-y-6" style={{gap:'25px'}}>
        {/* First Info Block - Globe */}
        <InfoBlock
          icon={globeIcon}
          text="Globally, 1 in 6 laboratory-confirmed bacterial infections are due to AMR"
          highlights={['1 in 6 laboratory-confirmed bacterial infections']}
          superscript="2"/>
        <InfoBlock
          icon={dnaIcon}
          text="83.1% prevalence of multidrug-resistant organisms (MDROs) in India"
          highlights={['83.1% prevalence of multidrug-resistant organisms']}
          superscript="3" />
      </div>
    </div>
  );
}
