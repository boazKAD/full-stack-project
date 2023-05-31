import { useEffect, useState } from "react";


export const useWindowSize = () =>{
    const [ size, setSize] = useState([0,0])

    useEffect(()=>{
        const updateSize = () =>{
            setSize([window.innerWidth, window.innerHeight]);
        };
        // updateSize()
        // console.log("updateSize", size, typeof size)
        window.addEventListener("resize", updateSize)
        return () => window.removeEventListener("resize", updateSize)

    },[])
    return {
        width: size[0],
        height: size[1]
    }
}