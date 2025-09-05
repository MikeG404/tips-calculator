import './App.css'
import Input from './components/Input'

import IconDollar from '../images/icon-dollar.svg'

function App() {

  return (
    <main>
      <h1 className='text-center'>SPLI <br></br> TTER</h1>
      <section id='calculator' className='h-screen flex flex-col items-center bg-white rounded-t-2xl'>
        <Input name="bill" src={IconDollar} alt="Icon Dollar"/>
      </section>
    </main>
  )
}

export default App
