import { useState } from 'react'

export default function TipButtonCustom({value, onChange, isSelected}) {
  const [isCustom, setIsCustom] = useState(false)

  const handleClick = () => {
    setIsCustom(true)
  }

  const handleBlur = () => {
    if (!value) {
      setIsCustom(false)
    }
  }

  if (isCustom || value) {
    return (
      <input
        type="number"
        placeholder="Custom"
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className="w-full preset-3 text-grey-550 px-4 py-2 bg-grey-50 rounded cursor-pointer text-center focus:outline-green2-200 focus:outline-2"
      />
    )
  }

  return (
    <button 
      onClick={handleClick}
      className="w-full preset-3 text-grey-550 px-4 py-2 bg-grey-50 rounded cursor-pointer hover:bg-grey-100 transition-colors">
      Custom
    </button>
  )
}
