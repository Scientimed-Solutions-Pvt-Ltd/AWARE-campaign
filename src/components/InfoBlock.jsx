export default function InfoBlock({ icon, text, highlights = [], superscript }) {
  // Function to render text with highlights
  const renderTextWithHighlights = () => {
    if (!Array.isArray(highlights) || highlights.length === 0) {
      return text;
    }

    let parts = [text];
    highlights.forEach((highlight) => {
      parts = parts.flatMap((part) => {
        if (typeof part !== 'string') return part;
        const regex = new RegExp(`(${highlight})`, 'gi');
        return part.split(regex).map((item, index) => {
          if (item.toLowerCase() === highlight.toLowerCase()) {
            return (
              <span key={`${highlight}-${index}`} className="font-bold" style={{color: '#b6236c'}}>
                {item}
              </span>
            );
          }
          return item;
        });
      });
    });

    return parts;
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-center mt-1 sm:mt-3 gap-[0vw] sm:gap-[2vw]">
      {/* Icon with circular container */}
      <div className="flex-shrink-0">
        <div className="round flex items-center justify-center w-[15vw] h-[15vw] sm:w-[11vw] sm:h-[11vw] md:w-[10vw] md:h-[10vw] lg:w-[11vw] lg:h-[11vw] xl:w-[7vw] xl:h-[7vw]" style={{
          borderRadius: '50%'
        }}>
          <img
            src={icon}
            alt="Icon"
            className="object-contain w-[15vw] h-[15vw] sm:w-[11vw] sm:h-[11vw] md:w-[10vw] md:h-[10vw] lg:w-[11vw] lg:h-[11vw] xl:w-[7vw] xl:h-[7vw]"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="flex-1 pt-1 sm:pt-5 md:pt-6 lg:pt-2">
        <p className="text-[4vw] sm:text-[3.5vw] md:text-[4vw] lg:text-[2.5vw] xl:text-[1.8vw] text-center md:text-left leading-relaxed font-medium">
          {renderTextWithHighlights()}
          {superscript && <sup><a href={`#ref`}>{superscript}</a></sup>}
        </p>
      </div>
    </div>
  );
}
