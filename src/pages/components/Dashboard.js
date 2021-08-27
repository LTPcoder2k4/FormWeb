import React, { useState} from 'react'
import { db } from '../../firebase'
import '../css/dashboard.css'

function Dashboard(props){
    var applicants = useState([])
    db.collection("applicants").get().then((querySnapshot) => {
        applicants[1](querySnapshot.docs.map(doc => doc.data()))
    })

    function onClickLink(param){
        window.location.assign(param)
    }

    function onCopyLink(param){
        navigator.clipboard.writeText(param)
        alert('Copy thành công rồi nha :)))')
    }

    return(
        <div className="container-dashboard">
            <div className={props.Status}>
                <div className="title">Danh sách ứng tuyển thành viên</div>
                <div className="content">
                    <ul className="applicants">
                        {applicants[0].map(({
                            CHOSENSECTION, 
                            CLASS, 
                            EMAIL, 
                            FB, 
                            NAME, 
                            PERSONALITY,
                            QUESTION,
                            SCHOOL,
                            SDT}, index)=>(
                            <li className="applicant" key={index}>
                                <div className="information">
                                <div className="element name">{NAME}</div>
                                <div className="element section">{CHOSENSECTION}</div>
                                <div className="element class">Lớp: {CLASS}</div>
                                <div className="element school">{SCHOOL}</div>
                                <div className="element personality">{PERSONALITY}</div>
                                <div 
                                    className="element fb link"
                                    onClick={() => onClickLink(FB)}
                                >Facebook</div>
                                <div 
                                    className="element email link"
                                    onClick={() => onCopyLink(EMAIL)}
                                >Email</div>
                                <div 
                                    className="element sdt link"
                                    onClick={() => onCopyLink(SDT)}
                                >Số điện thoại</div>
                                <div className="element question">{QUESTION}</div>
                            </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Dashboard