import { useCallback, useEffect, useState } from "react";
import Request from "../bssl/Request";

export default function useFetch(path) {

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true)
        try {
            await Request.get(path, null, (err, res, status, type) => {
              if(err || type !== "json"){
                setResult({
                  status: 500, data: null, type: "unknown"
                })
                setError(err ? err.toString() : "Non json type");
              }else {
                setResult({
                  status: status,
                  data: res,
                  type: type
                })
                setError(null);
              }
            })
            setLoading(false)
        } catch (error) {
          setLoading(false)
          alert("Fatal Error " + error.toString());
        }        
    }

    useEffect(() => { fetchData() }, [path])


    const refetch = useCallback(() => {
        fetchData()
    })

    return [result, loading, error, refetch]
}