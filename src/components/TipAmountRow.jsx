
export default function TipAmountRow({rowTitle}) {
  return (
    <div className="flex flex-row items-center">
        <div className="flex flex-col flex-1">
            <h3 className="preset-5 text-white">{rowTitle}</h3>
            <span className="preset-6 text-grey-400">/ person</span>
        </div>
        <data value="0" className="preset-1 text-green2-400">$0.00</data>
    </div>
  )
}
