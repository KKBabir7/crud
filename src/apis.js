import { useEffect, useState } from "react"

const Dataapis=(url)=>{

    const [data,setData]=useState(null)
    const [isloading,setLodding]=useState(true)
    const [error,setError]=useState(null)
    const fetchData=async (url)=>{
        try{
            const response=await fetch(url)
            const totaldata=await response.json()
            setData(totaldata)
            setLodding(false)
            setError(null)
        }
        catch(error){
            setLodding(false)
            setError(error)
            }
        }
        useEffect(()=>{
            fetchData(url)
        },[url])

        return [data,isloading,error]
}




export default Dataapis