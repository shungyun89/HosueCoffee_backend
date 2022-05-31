import React from "react";
import{useState,useEffect} from "react";
import "../style.scss"



const MenuCardRwd = (props) => {

    const {setdrinkId, setcss, datas} = props



    return(
        <>
            {/* 印出資料 */}
            {datas.map((mu,i)=>{

            const img1 = (mu.drink_name)



    return(

            <div className="listBodyRwd" >
                <div className="d-flex align-items-center justify-content-between cardRwd" type="button" 
                key={mu.id}  
                onClick={()=>{
                    setdrinkId((mu.id))
                    setcss({visibility: 'visible' ,opacity:'1'})
                }}>
                    <div className="col-3">
                        <img className=" listImg"src={require('./img/'+ img1 +'.jpg')} alt=""/>
                    </div>
                    <div className="nameRotateRwd">
                            <span >{mu.drink_name}</span>
                    </div>
                    <div className="price">
                    ${mu.price}
                    </div>
                </div>
            </div>

)
                    
})}
</>   
)    
}
export default MenuCardRwd