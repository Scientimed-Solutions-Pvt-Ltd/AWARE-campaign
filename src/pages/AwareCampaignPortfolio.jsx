import PageLayout from './PageLayout';
import product1 from '../assets/images/aa-21.png';
import product2 from '../assets/images/aa-22.png';
import product3 from '../assets/images/aa-23.png';
import product4 from '../assets/images/aa-24.png';
import product5 from '../assets/images/aa-25.png';
import abbotbig from '../assets/images/abbot-logo.png';

export default function AwareCampaignPortfolio({ onNext }) {
  return (
    <PageLayout showFooter={false} hideHeader={true}>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center space-y-8">
        <h1 className="text-4xl sm:text-4xl md:text-5xl font-brandon font-bold leading-snug tracking-tight text-center">
               <span className="text-blue-600 font-semibold leading-[1.2]">Abbott</span>
          <span className="text-pink-600 font-black"> Provides a Comprehensive Portfolio of</span>
          <span className="text-blue-600 font-semibold leading-[1.2]"> Combination Oral Antibiotics</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-8">
          <img src={product1} alt="CEFI" className="h-32" />
          <img src={product2} alt="FIGHTOX" className="h-32" />
          <img src={product3} alt="Wymox" className="h-32" />
          <img src={product4} alt="Cerom" className="h-32" />
          <img src={product5} alt="Rezfuran" className="h-32" />
        </div>

      
      </div>
          <div className="w-full max-w-7xl mx-auto flex flex-row justify-between mt-10 mb-5">
          <p className="text-lg text-gray-800 text-left" style={{fontFamily:'serif'}}>
          *Data on file<br />For the use of a Registered Medical Practitioner or a Hospital or a Laboratory only. <br />For full prescribing information, please contact: <br /><b>Abbott Healthcare Pvt Limited</b><br />Floor 18, Godrej BKC, Plot No. C - 68, BKC, <br />Near MCA Club, Bandra (E) Mumbai - 400051.
        </p>
        <img src={abbotbig} alt="Abbott" className="h-36" />
      </div>
    </PageLayout>
  );
}
