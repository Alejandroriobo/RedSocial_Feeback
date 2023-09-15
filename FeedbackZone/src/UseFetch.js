import { useState, useEffect } from "react";

export function UseFetch(url){
    const [data , setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [controller, setController] = useState(null);

  useEffect(()=>{
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);

    fetch(url, {signal: abortController.signal})
    .then((response)=> response.json())
    .then((data)=> setData(data))
    .catch((error) =>{
        if(error.name == "AbortError"){
            console.log("Reques cancelled");
        } else{setError(error);}
    })
    .finally(() => setLoading(false));

    return() => abortController.abort();
  }, []);
  const handleCancelRequest = () =>{
    if (controller){
        controller.abort();
        setError("Reques cancelled");
    }
    
  }
  return{ data, loading,error, handleCancelRequest};
}