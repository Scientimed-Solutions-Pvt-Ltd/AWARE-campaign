import InfoBlock from './InfoBlock';
import globeIcon from '../assets/images/ico01.png';
import dnaIcon from '../assets/images/ico02.png';

export default function AMRContent() {
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-[2vh] sm:gap-[4vh] md:gap-[1vh] lg:gap-[1vh]">
      {/* Main Heading - Properly Centered */}
      <div className="w-full">
        <h1 className="text-[5.5vw] sm:text-[2vw] md:text-[5vw] lg:text-[3vw] xl:text-[2.5vw] leading-snug tracking-tight text-center" style={{lineHeight:'20px'}}>
          <span className="text-pink-600 font-black">Antimicrobial resistance (AMR)</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> is one of the top 10 global public health threats <sup><a href='#ref'>1</a></sup></span>
        </h1>
      </div>

      {/* Info Blocks Container */}
      <div className="flex flex-col gap-[0vh] sm:gap-[2vh]">
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
