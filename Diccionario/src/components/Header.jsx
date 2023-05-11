import React, { useContext, useState } from 'react'
import { InputContext } from '../App';

const Header = () => {
    const [value, setValue] = useState ("");
    const {inputValue,setInputValue} = useContext(InputContext);
    console.log(inputValue);
const handleInputChange = e => setValue(e.target.value);
const handleSubmit = () => {
    setInputValue(value);
    setValue("");
}
const handleKeyDown = (e) => {
    if(e.key === "Enter") {
        setInputValue(value);
        setValue("");
       
    }
}

  return (
    <div className="bg-gray-700">
    <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white">Simple Dictionary</h1>
        <p className="text-center mt-1 mb-10 text-slate-300 text-lg">Find definations for word</p> 
<div className="flex items-center justify-center mt-5">
    <div className="flex border-2 border-gray-300 rounded">
        <input className="px-4 py-2 md:w-80" type="text" 
        placeholder="search..."
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={value}
        />
<button className="bg-sky-500 hover:bg-blue-600 active:bg-sky-700 border-l px-4 py-2 text-white transition-colors duration-300 ease-in-out">
  Search
</button>
    </div>
</div>
{inputValue && (
    <h3 className="text-gray-500 text-center mt-4 "> Result for: <span className="text-white font-bold">{inputValue}</span></h3>
)}
    </div>
    </div>
  )
}

export default Header