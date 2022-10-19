import { useState, useEffect } from 'react'
import AddBankComponent from '../features/AddBankComponent.jsx'

function Home() {
  const [bankArr, setBankArr] = useState([])
  return (
      <>
        <div className="Home">
          <div>Selecione um Banco</div>
          
          <button onClick={()=>setBankArr([...bankArr, <AddBankComponent/>])}>Adicione um banco</button>
          {
            bankArr.map(()=>{
              return <AddBankComponent/>
            })
          }
        </div>
      </>
  )
}

export default Home
