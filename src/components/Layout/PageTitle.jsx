import React from "react";
import './PageTitle.css'
const PageTittle = props =>{
    return  (
        <div className="PageTittle">
            <h1>{props.title}</h1>
        </div>
    )
}

export default PageTittle