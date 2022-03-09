import { useState } from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import { nanoid } from "nanoid"
export const Grocery = ()=>{
    const [grocery, setGrocery] = useState([])
    
    const addgros = (data)=>{
        const t = {
            id: nanoid(),
            title:data,
            status: false,
        }
        setGrocery([...grocery,t])
    }
    const dlt = (id)=>{
        const del = grocery.filter((ele)=>{return ele.id !== id})
        setGrocery(del)
    }
   
 

    return(
        <div
        className="abc">
<GroceryInput addgros ={addgros}/>
{grocery.map((e)=>(
    <GroceryList groc = {e}  key = {e.id} dlt = {dlt}/>
    
))}

        </div>
    )
}