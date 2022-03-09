export const GroceryList =({groc,dlt})=>{

   
  
    return(
       
        <div >
            {groc.title} -{groc.status? "Done": "Not Done"}
           <button
           onClick={()=>{dlt(groc.id)}}
           >
               Delete</button>
            </div>
    ) 
}
