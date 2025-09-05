import './App.css'
import Input from './components/Input'
import TipButton from './components/TipButton'
import TipButtonCustom from './components/TipButtonCustom'
import TipAmountRow from './components/TipAmountRow'
import ResetButton from './components/ResetButton'

import Logo from '../images/logo.svg'
import IconDollar from '../images/icon-dollar.svg'
import IconPerson from '../images/icon-person.svg'

function App() {

  return (
    <main className='flex flex-col justify-center items-center'>
      <img src={Logo} alt="logo" className='m-auto py-[50px]'/>
      <section id='calculator' className='w-full h-screen flex flex-col items-center gap-8 px-6 py-8 bg-white rounded-t-2xl md:max-w-[600px] md:px-20 py-12 md:h-auto xl:flex-row xl:max-w-[920px] xl:p-8 xl:items-start'>


        <section id='tip-selection' className='w-full flex flex-col gap-8'>
        <Input label="Bill" name="bill" src={IconDollar} alt="Icon Dollar"/>
        <div>
          <h2 className='preset-5 text-grey-500 pb-2'>Select tip %</h2>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
            <TipButton text="5%"/>
            <TipButton text="10%"/>
            <TipButton text="15%"/>
            <TipButton text="25%"/>
            <TipButton text="50%"/>
            <TipButtonCustom />
          </div>
        </div>
        <Input label="Person" name="person" src={IconPerson} alt="Icon Person"/>
        </section>


        <section id='result' className='flex flex-col w-full p-6 rounded-2xl bg-green2-900 xl:gap-32'>
          <div className='flex flex-col gap-6 pb-8'>
            <TipAmountRow rowTitle="Tip Amount"/>
            <TipAmountRow rowTitle="Total"/>
          </div>
          <ResetButton />
        </section>
      </section>
    </main>
  )
}

export default App
