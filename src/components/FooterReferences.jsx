export default function FooterReferences() {
  const references = [
    "1. Manassa G, Mihai A, Grazye E, et al. Bacterial Antibiotic Resistance: The Most Critical Pathogens. Pathogens. 2021;10(10):1310",
    "2. Global antibiotic resistance surveillance report. Available from: https://www.who.int/publications/i/item/9789241511537. Accessed on 27 February 2026",
    "3. van der Phoek K, Vos MC, Rugtwiush H, et al. Preoperative screening for multidrug-resistant organisms in endoscopic retrograde cholangiopancreatography. An international, multicentric, cross-sectional observational study. EClinicalMedicine. 2025;00:103527."
  ];

  return (
    <footer className="px-6 md:px-20 py-4 text-xs text-gray-600 space-y-1 bg-white mb-5" id="ref">
      {references.map((ref, index) => (
        <p key={index} className="leading-snug" style={{fontWeight:'200'}}>
          {ref}
        </p>
      ))}
    </footer>
  );
}
