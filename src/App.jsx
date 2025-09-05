import './App.css'
import Input from './components/Input'

import Logo from '../images/logo.svg'
import IconDollar from '../images/icon-dollar.svg'
import IconPerson from '../images/icon-person.svg'
import TipButton from './components/TipButton'
import TipButtonCustom from './components/TipButtonCustom'
import TipAmountRow from './components/TipAmountRow'

function App() {

  return (
    <main>
      <img src={Logo} alt="logo" className='m-auto py-[50px]'/>
      <section id='calculator' className='h-screen flex flex-col items-center gap-8 px-6 py-8 bg-white rounded-t-2xl'>

        <Input label="Bill" name="bill" src={IconDollar} alt="Icon Dollar"/>

        <section id='tip-selection' className='w-full'>
          <h2 className='preset-5 text-grey-500 pb-2'>Select tip %</h2>
          <div className='grid grid-cols-2 gap-2'>
            <TipButton text="5%"/>
            <TipButton text="10%"/>
            <TipButton text="15%"/>
            <TipButton text="25%"/>
            <TipButton text="50%"/>
            <TipButtonCustom />
          </div>
        </section>

        <Input label="Person" name="person" src={IconPerson} alt="Icon Person"/>

        <section id='result' className='w-full p-6 rounded-2xl bg-green2-900'>
          <TipAmountRow rowTitle="Tip Amount"/>
          <TipAmountRow rowTitle="Total"/>
        </section>
      </section>
    </main>
  )
}

export default App
