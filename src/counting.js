import React from 'react'

export const Counting = (props) => {
    return (
        <div>
             <p>{props.name.num}</p>
           <button onClick={()=>props.sets(2)}>add</button> 
        </div>
    )
}
