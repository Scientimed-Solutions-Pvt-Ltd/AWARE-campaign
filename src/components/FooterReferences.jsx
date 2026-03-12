export default function FooterReferences() {
  const references = [
    "1. Manassa G, Mihai A, Grazye E, et al. Bacterial Antibiotic Resistance: The Most Critical Pathogens. Pathogens. 2021;10(10):1310",
    "2. Global antibiotic resistance surveillance report. Available from: https://www.who.int/publications/i/item/9789241511537. Accessed on 27 February 2026",
    "3. van der Phoek K, Vos MC, Rugtwiush H, et al. Preoperative screening for multidrug-resistant organisms in endoscopic retrograde cholangiopancreatography. An international, multicentric, cross-sectional observational study. EClinicalMedicine. 2025;00:103527."
  ];

  return (
    <footer className="px-[3vw] md:px-[7vw] py-[1vh] text-[2vw] sm:text-[1.5vw] md:text-[0.7vw] text-gray-600 bg-white mb-[1vh]" id="ref" style={{lineHeight: 'clamp(12px, 1.5vh, 16px)'}}>
      {references.map((ref, index) => (
        <p key={index} className="leading-snug" style={{fontWeight:'200', marginTop:'0px', marginBottom: 'clamp(4px, 0.5vh, 8px)'}}>
          {ref}
        </p>
      ))}
    </footer>
  );
}
