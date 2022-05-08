import { useEffect, useState } from "react";

const useServices = () =>{
    const [inventoryes, setinventoryes] = useState([]);

    useEffect( ()=>{
        fetch('https://nameless-ridge-09787.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setinventoryes(data));
    }, []);
    return [inventoryes, setinventoryes]
}

export default useServices;
