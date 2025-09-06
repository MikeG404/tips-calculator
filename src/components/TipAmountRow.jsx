export default function TipAmountRow({rowTitle, amount}) {
  return (
    <div className="flex flex-row items-center">
        <div className="flex flex-col flex-1">
            <h3 className="preset-5 text-white">{rowTitle}</h3>
            <span className="preset-6 text-grey-400">/ person</span>
        </div>
        <data value={amount} className="preset-1 text-green2-400">${amount}</data>
    </div>
  )
}
