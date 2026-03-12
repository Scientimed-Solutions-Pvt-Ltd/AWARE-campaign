export default function Button({ label = "Next", imageUrl, onClick }) {
  return (
    <button
      onClick={onClick} 
      className="flex items-center gap-[1.5vw] font-bold text-[#333] hover:text-[#b6236c] transition-colors duration-200 cursor-pointer whitespace-nowrap bg-white"
      style={{
        fontSize: 'clamp(18px, 3.5vw, 28px)'
      }}
      aria-label={label} >
      {label}
      {imageUrl && <img src={imageUrl} alt={label} className="w-auto" style={{height: 'clamp(28px, 2.5vh, 40px)'}} />}
    </button>
  );
}
