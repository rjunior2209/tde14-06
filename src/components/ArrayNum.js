import { useState } from "react";


const ArrayNum = () => {
    const[Arr=[1,3, 8,15,30,20,2,5,99,85,95,28], setArr] = useState()
   const orderArr =() =>{
   
    if(Arr){

        
        setArr(Arr.sort(function(a,b){
            return a - b
        }))
        
    }

   }
    
         return (
        <div>
            <button onClick ={orderArr}>Ordenar</button>
            <h4>{Arr}</h4>
        </div>
    );
}

export default ArrayNum;