export default function Button({ label = "Next", imageUrl, onClick }) {
  return (
    <button
      onClick={onClick} 
      className="flex items-center gap-2 text-2xl md:text-3xl font-bold text-[#333] hover:text-[#b6236c] transition-colors duration-200 cursor-pointer whitespace-nowrap bg-white"
      aria-label={label} >
      {label}
      {imageUrl && <img src={imageUrl} alt={label} className="h-8 md:h-10 w-auto" />}
    </button>
  );
}
