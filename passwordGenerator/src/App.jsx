import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "@!#$%^&*()[]{}~`"

    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * str.length + 1)
      
      pass += str.charAt(char)
    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  
  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])


  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-sm p-5 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-4xl text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mt-5'>
        <input type='text' value={password} className='outline-none w-full py-1 px-3' ref={passwordRef} readOnly />
        <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-6 mt-3'>
        <div className='flex item-center gap-x-6'>
          <input type='range' 
          min={8} max={100} value={length} className=' cursor-pointer' 
          onChange={(e)=>{setLength(e.target.value)}} 
          
           />
          <label>Length : {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type='checkbox' defaultChecked={numberAllowed} 
            onChange={() => {
              setNumberAllowed((prev) => ! prev);
              }} />
              <label>Number</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type='checkbox' defaultChecked={charAllowed} 
            onChange={() => {
              setCharAllowed((prev) => ! prev);
              }} />
              <label>Special Charector</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
