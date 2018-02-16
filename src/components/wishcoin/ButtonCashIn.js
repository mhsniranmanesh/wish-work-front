import React from 'react';

const ButtonCashIn = ({goToCashIn , cash}) =>{
    console.log(cash , 'cash');
    return(
        <div>
            <btn onClick={(event)=>{goToCashIn(cash);}} id="notenough-cashin-button" className="btn btn-rec btn-primary">افزایش موجودی</btn>
        </div>

    )
};

export default ButtonCashIn;