import React from "react";
import './AdviceText.css'

export default props =>
    <div>
    <div className="headText">ADVICE #{props.num}</div>    
    <div className="mainText">"{props.label}"</div>
    <div className="divisor"></div>
    </div>