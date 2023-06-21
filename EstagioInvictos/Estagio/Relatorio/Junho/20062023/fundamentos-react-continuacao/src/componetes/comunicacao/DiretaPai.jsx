import React from "react";
import DiretaFinlho from "./DiretaFinlho";

export default props =>{
    return (
        <div>
            <DiretaFinlho nome="Junior" idade={20} nerd={true}/>
            <DiretaFinlho nome="Gabriel" idade={15} nerd={false}/>
        </div>
    )
}