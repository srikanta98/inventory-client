import { useEffect, useState } from "react";

const useServiceDetail = inventoryId =>{
    console.log(inventoryId)
    const [inventory, setInventory] = useState({});

    useEffect( () =>{
        const url = `https://nameless-ridge-09787.herokuapp.com/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setInventory(data));

    }, [inventoryId]);
    return [inventory]
}

export default useServiceDetail;