import './App.css'
import { useState } from 'react'

import Input from './components/Input'
import TipButton from './components/TipButton'
import TipButtonCustom from './components/TipButtonCustom'
import TipAmountRow from './components/TipAmountRow'
import ResetButton from './components/ResetButton'

import Logo from '../images/logo.svg'
import IconDollar from '../images/icon-dollar.svg'
import IconPerson from '../images/icon-person.svg'

function App() {
  const [values, setValues] = useState({
    bill: '',
    tip: null,
    person: '',
    customTip: ''
  })

  const [errors, setErrors] = useState({
    bill: '',
    person: ''
  })

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }))

    if (name === 'bill' || name === 'person') {
      const numValue = parseFloat(value)
      if (numValue === 0) {
        setErrors(prev => ({ ...prev, [name]: 'Ne peut pas être zéro' }))
      } else {
        setErrors(prev => ({ ...prev, [name]: '' }))
      }
    }
  }

  const onTipSelect = (percentage) => {
    setValues(prevValues => ({
      ...prevValues,
      tip: percentage,
      customTip: ''
    }))
  }

  const onCustomTipChange = (e) => {
    const value = e.target.value
    setValues(prevValues => ({
      ...prevValues,  
      customTip: value,
      tip: value ? parseFloat(value) : null
    }))
  }

  const calculateTipAmount = () => {
    const bill = parseFloat(values.bill)
    const tipPercent = values.tip
    const people = parseInt(values.person)

    if (!bill || !tipPercent || !people) {
      return 0
    }

    return (bill * (tipPercent / 100)) / people
  }

  const calculateTotal = () => {
    const bill = parseFloat(values.bill)
    const tipAmount = calculateTipAmount()
    const people = parseInt(values.person)

    if (!bill || !people) {
      return 0
    }

    return (bill / people) + tipAmount
  }

  const resetAll = () => {
    setValues({
      bill: '',
      tip: null,
      person: '',
      customTip: ''
    })
    setErrors({
      bill: '',
      person: ''
    })
  }

  return (
    <main className='h-screen flex flex-col justify-center items-center'>
      <img src={Logo} alt="logo" className='m-auto py-[50px] xl:m-0 xl:pb-[80px] xl:pt-0'/>
      <section id='calculator' 
        className='w-full h-screen flex flex-col items-center gap-8 px-6 py-8 bg-white rounded-t-2xl xl:rounded-2xl md:max-w-[600px] md:px-20 py-12 md:h-auto xl:flex-row md:max-w-[920px] xl:p-8 xl:items-start'>


        <section id='tip-selection' className='w-full flex flex-col gap-8'>
        <Input value={values.bill} onChange={onChange} label="Bill" name="bill" src={IconDollar} alt="Icon Dollar" error={errors.bill}/>
        <div>
          <h2 className='preset-5 text-grey-500 pb-2'>Select tip %</h2>
          <div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
            <TipButton text="5%" onClick={onTipSelect} isSelected={values.tip === 5}/>
            <TipButton text="10%" onClick={onTipSelect} isSelected={values.tip === 10}/>
            <TipButton text="15%" onClick={onTipSelect} isSelected={values.tip === 15}/>
            <TipButton text="25%" onClick={onTipSelect} isSelected={values.tip === 25}/>
            <TipButton text="50%" onClick={onTipSelect} isSelected={values.tip === 50}/>
            <TipButtonCustom value={values.customTip} onChange={onCustomTipChange} isSelected={values.tip && !values.customTip}/>
          </div>
        </div>
        <Input value={values.person} onChange={onChange} label="Number of People" name="person" src={IconPerson} alt="Icon Person" error={errors.person}/>
        </section>


        <section id='result' className='flex flex-col w-full p-6 rounded-2xl bg-green2-900 xl:gap-32'>
          <div className='flex flex-col gap-6 pb-8'>
            <TipAmountRow rowTitle="Tip Amount" amount={calculateTipAmount().toFixed(2)}/>
            <TipAmountRow rowTitle="Total" amount={calculateTotal().toFixed(2)}/>
          </div>
          <ResetButton onClick={resetAll} />
        </section>
      </section>
    </main>
  )
}

export default App
