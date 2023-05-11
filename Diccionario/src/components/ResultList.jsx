import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { InputContext } from '../App';
import MeaningList from './MeaningList';
import Examples from './Examples';
import Synonym from './Synonym';
import Antonym from './Antonym';

axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const ResultList = () => {
    const {inputValue} = useContext(InputContext);
    const [response , setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fectchData = async (param) => {
try {
    setLoading(true);
    const res = await axios(`/${param}`)
    setResponse(res.data);
    setError(null);
} catch (error) {
    setError(err);
} finally {
    setLoading(false);
}}

    useEffect(() => {
if(inputValue.length){
    fectchData(inputValue)
}
    },[inputValue])

    if(loading) {
        return (
          <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
            <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
          </div>
        )
      }
    
      if(error) {
        return <h3 className="text-center mt-10 font-semibold text-gray-500">No Definitions Found 😥</h3>
      }
    
      return (
    <div className="container mx-auto p-4 max-w-2xl">
        <div>
           {
            response && (
                <div>
                <h3 className="text-2xl font-bold mt-4 mb-4">Meaning & Definisions:</h3>
                <MeaningList mean={response} />
                <h3 className="text-2xl font-bold mt-4 mb-4">Example:</h3>
                <Examples mean={response}/>
                <h3 className="text-2xl font-bold mt-4 mb-4">Synonym:</h3>
                <Synonym mean={response} />
                <h3 className="text-2xl font-bold mt-4 mb-4">Antonym:</h3>
                <Antonym mean={response} />
            </div>
            )
           }
        </div>
    </div>
  )
}

export default ResultList