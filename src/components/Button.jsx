import React from "react";

const Button= ({children,onClick}) =>{
  return(
      
           <div className='btn-container'>
                    <button className="btn" onClick={onClick}>
                      {children}
                    </button>
                </div>
      
  )

}
export default Button