import React,{useEffect,useRef,useState} from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import * as THREE from "three";
const animation = () => {
    const [vantaEffect,setVantaEffect] = useState(0);
    const vantaRef = useRef(null);
    useEffect(()=>{
      if(!vantaEffect){
        setVantaEffect(
            BIRDS({
                element: vantaRef.current,
                THREE
            })
        )
      }
      return () =>{
        if(vantaEffect) vantaEffect.destory();
      }
    },[vantaEffect])
  return (
    <div ref={vantaRef}>
        <h2>The VantaEffect is there</h2>
    </div>
  )
}

export default animation