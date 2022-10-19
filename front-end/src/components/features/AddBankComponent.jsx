import { useState, useEffect } from 'react'



function AddBankComponent() {

  return (
    <div className="AddBankComponent">
      <select name="cars" id="cars">
        <option value="#FF0000">Vermelho</option>
        <option value="#FF7F00">Laranja</option>
        <option value="#FFFF00">Amarelo</option>
        <option value="#00FF00">Verde</option>
        <option value="#00FFFF">Ciano</option>
        <option value="#0000FF">Azul</option>
        <option value="#8B00FF">roxo</option>
      </select><br/>
      <input type="text" name="bankName"/>
      <button >Criar</button>
      {/* <button onClick={}>Canelar</button> */}
    </div>
  )
}

export default AddBankComponent
