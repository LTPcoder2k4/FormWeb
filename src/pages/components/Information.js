import Section from "./Section";
import React, { useState } from 'react';
import { db} from "../../firebase";

function Information(){
    var Name = useState('')
    var School = useState('')
    var Class = useState('')
    var Personality = useState('')
    var ChosenSection = useState('')
    var Email = useState('')
    var Fb = useState('')
    var Sdt = useState('')
    var Question = useState('')

    function onHandleChange(event){
        var target = event.target
        var name = target.name
        var value = target.value
        switch (name){
            case 'txtName': 
                Name[1](value)
                break
            case 'txtSchool':
                School[1](value)
                break
            case 'txtClass':
                Class[1](value)
                break
            case 'txtPersonality':
                Personality[1](value)
                break
            case 'txtEmail':
                Email[1](value)
                break
            case 'txtFb':
                Fb[1](value)
                break
            case 'txtQuestion':
                Question[1](value)
                break
            case 'txtSDT':
                Sdt[1](value)
                break
            default:
                break
        }
    }

    function onSetSection(sec){
        ChosenSection[1](sec)
    }

    async function onSubmitForm(e){
        e.preventDefault()
        if(
            Name[0] && 
            School[0] && 
            Class[0] && 
            Personality[0] && 
            ChosenSection[0] && 
            Email[0] && 
            Fb[0] && 
            Sdt[0] &&
            Question[0])
        {
            try {
                await db.collection('applicants').add({
                    NAME: Name[0],
                    SCHOOL: School[0],
                    CLASS: Class[0],
                    PERSONALITY: Personality[0],
                    CHOSENSECTION: ChosenSection[0],
                    EMAIL: Email[0],
                    FB: Fb[0],
                    SDT: Sdt[0],
                    QUESTION: Question[0]
                })
                window.location.href = 'success'
            } catch (error) {
                console.log(error)
            }
        }else{
            alert('Hãy điền thông tin đầy đủ bạn nhé!')
        }
    }

    return(
        <div>
            <div className="element">
                <div className="label">Họ và tên của bạn là gì?</div>
                <input 
                    type="text" 
                    name="txtName"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Bạn học trường nào?</div>
                <input 
                    type="text" 
                    name="txtSchool"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Bạn ở lớp mấy nhỉ?</div>
                <input 
                    type="text" 
                    name="txtClass"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Cho tụi mình biết tính cách sơ lược của bạn đi.</div>
                <input 
                    type="text" 
                    name="txtPersonality"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Bạn ứng tuyển vào mảng nào.</div>
                <Section onReceiveSection={onSetSection}/>
            </div>
            <div className="element">
                <div className="label">Cho mình xin email của bạn với.</div>
                <input 
                    type="email" 
                    name="txtEmail"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Cả đường link Facebook của bạn luôn nha.</div>
                <input 
                    type="text" 
                    name="txtFb"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Rồi số điện thoại của bạn nữa á.</div>
                <input 
                    type="text" 
                    name="txtSDT"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Cuối cùng, bạn có thắc mắc gì với club mình hong?</div>
                <input 
                    type="text" 
                    name="txtQuestion"
                    onChange={onHandleChange}
                />
            </div>
            <div className="button">
                <div 
                    className="submit"
                    type="submit"
                    onClick={onSubmitForm}
                >Submit</div>
            </div>
        </div>
    );
}

export default Information