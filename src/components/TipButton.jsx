export default function TipButton({text, onClick, isSelected}) {
  const handleClick = () => {
    const percentage = parseInt(text.replace('%', ''));
    onClick(percentage);
  }

  return (
    <button 
      onClick={handleClick}
      className={`w-full preset-3 px-4 py-2 rounded cursor-pointer transition-colors ${
        isSelected 
          ? 'bg-green2-400 text-green2-900' 
          : 'text-white bg-green2-900 hover:bg-green2-200 hover:text-green2-900'
      }`}>
        {text}
    </button>
  )
}
