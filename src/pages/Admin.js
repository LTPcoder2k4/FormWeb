import Login from "./components/Login"
import React, { useState } from 'react';
import Dashboard from "./components/Dashboard";

function Admin(){
    var status = useState('login')
    var dashBoard = useState('dashboard')

    function onSetStatus(params){
        status[1](params)
        dashBoard[1]('dashboard active')
    }

    return(
        <div>
            <Login Status={status[0]} onReceiveStatus={onSetStatus}/>
            <Dashboard Status={dashBoard[0]}/>
        </div>
    )
}

export default Admin