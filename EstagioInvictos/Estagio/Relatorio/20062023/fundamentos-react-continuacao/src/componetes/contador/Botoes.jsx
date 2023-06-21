import React from "react";

export default props => {
    return (
        <div>
            <button onClick={props.setDeclemento}>-</button>
            <button onClick={props.setInclemento}>+</button>
        </div>
    )
}