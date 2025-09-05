import './App.css'
import Input from './components/Input'

import Logo from '../images/logo.svg'
import IconDollar from '../images/icon-dollar.svg'

function App() {

  return (
    <main>
      <img src={Logo} alt="logo" className='m-auto py-[50px]'/>
      <section id='calculator' className='h-screen flex flex-col items-center px-6 py-8 bg-white rounded-t-2xl'>
        <Input name="bill" src={IconDollar} alt="Icon Dollar"/>
      </section>
    </main>
  )
}

export default App
