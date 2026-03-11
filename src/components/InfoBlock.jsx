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
    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-10">
      {/* Icon with circular container */}
      <div className="flex-shrink-0">
        <div className="w-40 h-40 md:w-40 md:h-40 rounded-full flex items-center justify-center">
          <img
            src={icon}
            alt="Icon"
            className="w-40 h-40 md:w-40 md:h-40 object-contain"
          />
        </div>
      </div>

      {/* Text content */}
      <div className="flex-1 pt-1 md:pt-2">
        <p className="text-3xl md:text-3xl text-gray-700 leading-relaxed font-medium">
          {renderTextWithHighlights()}
          {superscript && <sup><a href={`#ref`}>{superscript}</a></sup>}
        </p>
      </div>
    </div>
  );
}
