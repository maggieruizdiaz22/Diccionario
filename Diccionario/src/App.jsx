import { createContext, useState } from 'react'
import Header from './components/Header'
import ResultList from './components/ResultList';

//Create a Context
export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);

  const value = {
    inputValue, setInputValue
  }

  return (
   <InputContext.Provider value = {value} >
 <div>
  <Header />
<ResultList />
 </div>
 </InputContext.Provider>
)}

export default App
