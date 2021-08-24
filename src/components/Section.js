import React, { useState } from 'react';
function Section(props){
    function onClickSection(sec){
        props.onReceiveSection(sec)
    }

    const section= useState([
        'Mảng sáng tạo (Science)', 
        'Mảng thiết kế (Design)', 
        'Mảng lập trình (Programing)',
        'Mảng marketing'
    ])
    var sections = section[0].map((sec, indx)=>{
        return <div
            key={indx}
            className="section"
            onClick={() => onClickSection(sec)}
            id={indx}
        >{sec}</div>
    })
    return(
        <div className="chose">
            {sections}
        </div>
    )
}

export default Section