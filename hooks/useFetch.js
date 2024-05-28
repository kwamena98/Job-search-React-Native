import axios from 'axios'
import { useEffect,useState } from 'react'
// import {RAPID_API_KEY} from '@env'

// const rapidApiKey=RAPID_API_KEY

const useFetch =(enpoint,query)=>{
    const [data,setData]=useState([])
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState(null)



    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${enpoint}`,
        headers: {
            'X-RapidAPI-Key': '3041b75c36msh85b7bc64e024175p10acf4jsn9de6394947d9',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
          },
        params: {
        ...query
        }

      };

      const fetchData =async()=>{
        setIsLoading(true)

        try{
            const response= await axios.request(options);
            setData(response.data.data)
            // console.log(response.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert('There is an error')
        }finally{
            setIsLoading(false)

        }
      }

      useEffect(()=>{
        fetchData();
      },[])

      const refetch =() =>{
        setIsLoading(true)
        fetchData();
      }

      return {data,isLoading,error,refetch}
}

export default useFetch



