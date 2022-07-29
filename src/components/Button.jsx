import React from "react";
import './Button.css'

function Child(props) {
    return (
        <button
            id='button'
            className="button"
            onClick={() => props.onClick()}
        ></button>
    )
}
export default Child

// export default props =>
//     <button
//         className="button"
//         // onClick={e => props.click && props.click()}
//         onClick={()=>props.click()}
//     >

//     </button>
