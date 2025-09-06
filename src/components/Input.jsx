export default function Input({label, name, src, alt, value, onChange, error}) {
  return ( 
    <label htmlFor={name} className="flex flex-col w-full gap-2 preset-5 text-grey-500">
        <div className="flex justify-between items-center">
          <span className={error ? "text-red-500" : ""}>{label}</span>
          {error && (
            <span className="text-red-500 text-sm flex">
              {error}
            </span>
          )}
        </div>
        <div className="relative w-full">
            <img src={src} alt={alt} className="absolute top-3 left-4"/>
            <input
                className={`w-full placeholder:preset-3 text-green2-900 px-4 py-2 text-right bg-grey-50 rounded focus:outline-2 ${
                  error 
                    ? 'outline-red-500 outline-2' 
                    : 'focus:outline-green2-200'
                }`}
                type="number" 
                name={name} 
                placeholder='0' 
                value={value}
                onChange={onChange}
            />
        </div>
    </label>
  )
}
