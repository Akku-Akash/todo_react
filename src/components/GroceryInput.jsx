import { useState } from "react"

export const GroceryInput =({addgros})=>{
    const [text, setText] = useState() 
    return (
        <div>
            <input type="text" 
            onChange={(e)=>{
               
                    setText(e.target.value)
                
            }}
            />
            <button
            onClick={()=>{
                if(text.length === 0){
                    alert("please add something")
                }
                else{

                    addgros(text)
                }
                
            }}
            >Add </button>
        </div>
    )
}