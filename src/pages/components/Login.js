import '../css/login.css'
import React, { useState } from 'react';
import { db } from '../../firebase'
import SHA256 from '../../SHA256'

function Login(props){
    var username = useState('')
    var password = useState('')
    var admin = useState([])
    db.collection("admin").get().then((querySnapshot) => {
        admin[1](querySnapshot.docs.map(doc => doc.data()))
    })
    var rootAccount
    admin[0].map(({username, password}, index) => 
        rootAccount = {username, password}
    )

    function onHandleChange(event){
        let target = event.target;
        let name = target.name
        let value = target.value
        switch (name){
            case 'txtUsername':
                username[1](value)
                break
            case 'txtPassword':
                password[1](value)
                break
            default:
                break
        }
    }

    function onSignIn(event){
        if (username[0] && password[0]){
            if (rootAccount.username === SHA256(username[0]) && rootAccount.password === SHA256(password[0])){
                props.onReceiveStatus('login success')
            }else{
                alert('Sai mật khẩu rồi, bạn phải admin hok zạ?')
                window.location.href = 'admin'
            }
        }else{
            alert('Nhập đủ thông tin giùm 1 cái!')
        }
    }

    return(
        <div className="container-login">
            <div className={props.Status}>
                <div className="title">Administration</div>
                <div className="txtInp">
                    <input 
                        className="signinInp" 
                        type="text" 
                        id="username" 
                        name="txtUsername"
                        onChange={onHandleChange}
                    />
                    <label className="signinLabel" htmlFor="username">Username</label>
                </div>
                <div className="txtInp">
                    <input 
                        className="signinInp" 
                        type="password" 
                        id="password" 
                        name="txtPassword"
                        onChange={onHandleChange}
                    />
                    <label className="signinLabel" htmlFor="password">Password</label>
                </div>
                <div className="button">
                    <div 
                        className="signin"
                        onClick={onSignIn}
                    >Log in</div>
                </div>
            </div>
        </div>
    )
}

export default Login