export default function ResetButton({onClick}) {
  return (
    <button 
      onClick={onClick}
      className="preset-4 w-full px-8 py-2 bg-green2-750 text-green2-800 rounded-lg cursor-pointer hover:bg-green2-200 hover:text-green2-900">
        RESET
    </button>
  )
}
