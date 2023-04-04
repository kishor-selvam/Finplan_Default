import React from 'react'
import {  CardBody } from 'reactstrap';

export const Payofprogress = () => {
const data=4;
const nu=5.5;
var add= (data/nu)*100;
console.log( "add "+add);

let num=parseInt(add);
  
return (

    <React.Fragment>
    <CardBody>
      <div><h4>Payoff Progress</h4></div>
    <div className="px-2 py-2 mt-1">
        <p className="mb-1">&#8377;{data} Lac<span className="float-end">&#8377;{nu} Lac</span></p>
        <div className="progress " style={{ height: "15px",color:"black",fontWeight:"bold" }}>
            <div  role="progressbar"
                style={{ width:`${add}%`,backgroundColor:'blue',textAlign:"center",color:"white"}}>
                  {num}%
            </div>     
        </div>
        
    </div>
    </CardBody>
     </React.Fragment>
  )
}
