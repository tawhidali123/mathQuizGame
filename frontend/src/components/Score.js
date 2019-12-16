import React from 'react'
import { Animated } from "react-animated-css"

export default function Score(props) {
    return (
        <div>
            
                <h1>
                    Score:
                    
                    <div className="animated shake">
                        {props.total}
                    </div>
                   
                </h1>
            
        </div>
    )
}
