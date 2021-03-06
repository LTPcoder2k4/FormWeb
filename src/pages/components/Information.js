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
            alert('H??y ??i???n th??ng tin ?????y ????? b???n nh??!')
        }
    }

    return(
        <div>
            <div className="element">
                <div className="label">H??? v?? t??n c???a b???n l?? g???</div>
                <input 
                    type="text" 
                    name="txtName"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">B???n h???c tr?????ng n??o?</div>
                <input 
                    type="text" 
                    name="txtSchool"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">B???n ??? l???p m???y nh????</div>
                <input 
                    type="text" 
                    name="txtClass"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Cho t???i m??nh bi???t t??nh c??ch s?? l?????c c???a b???n ??i.</div>
                <input 
                    type="text" 
                    name="txtPersonality"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">B???n ???ng tuy???n v??o m???ng n??o.</div>
                <Section onReceiveSection={onSetSection}/>
            </div>
            <div className="element">
                <div className="label">Cho m??nh xin email c???a b???n v???i.</div>
                <input 
                    type="email" 
                    name="txtEmail"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">C??? ???????ng link Facebook c???a b???n lu??n nha.</div>
                <input 
                    type="text" 
                    name="txtFb"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">R???i s??? ??i???n tho???i c???a b???n n???a ??.</div>
                <input 
                    type="text" 
                    name="txtSDT"
                    onChange={onHandleChange}
                />
            </div>
            <div className="element">
                <div className="label">Cu???i c??ng, b???n c?? th???c m???c g?? v???i club m??nh hong?</div>
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