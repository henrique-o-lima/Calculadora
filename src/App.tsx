import { useState } from 'react'
import './App.css'

function App() {
  const [val, setVal] = useState("");
  const del = () => {
    try {
      setVal(val.slice(0, -1))
    } catch (error) {
      
    }
  };
  const calculate = () => {
    try {
      setVal(eval)
    } catch (error) {
      setVal("Error")
    }
  };
  return (
    <>
    <div className="mt-36 flex justify-center">
      <div className="grid grid-cols-4 auto-rows-auto w-1/3
      h-auto text-2xl rounded-xl gap-2 bg-white px-4 py-4 drop-shadow-lg">
        <div className="grid col-span-full">
          <div className="h-5 text-end text-black/50 text-lg"></div>
          <div className="h-14 mt-3 text-end text-3xl overflow-hidden">{val}</div>
        </div>
        <button className="bg-zinc-200 col-span-2" onClick={() => setVal("")}>AC</button>
        <button className="bg-zinc-200" onClick={del}>DEL</button>
        <button className="bg-orange-500">÷</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 1)}>1</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 2)}>2</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 3)}>3</button>
        <button className="bg-orange-500" onClick={() => setVal(val + '*')}>*</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 4)}>4</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 5)}>5</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 6)}>6</button>
        <button className="bg-orange-500" onClick={() => setVal(val + '+')}>+</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 7)}>7</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 8)}>8</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 9)}>9</button>
        <button className="bg-orange-500" onClick={() => setVal(val + '-')}>-</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + '.')}>.</button>
        <button className="bg-zinc-200" onClick={() => setVal(val + 0)}>0</button>
        <button className="bg-green-500 col-span-2" onClick={calculate}>=</button>
      </div>
    </div>  
    </>
  )
}

export default App
