
import React from "react";

function PatientCard({name,passport,gender,age,email,password,phone,textareaFill,repeatChecking})
{
    const savedPassword=password;

    console.log(savedPassword)

    return(
        <>
        <div className="card">
            <p>ФИО: {name}</p>
            <p>Серия и номер паспорта: {passport}</p>
            <p>Пол: {gender}</p>
            <p>Возраст: {age}</p>
            <p><a href={`mailto:${email}`}>Email: {email}</a></p>
            <p>Телефон: {phone}</p>
            <p>Описание симптомов: {textareaFill}</p>
            <p>Повторный прием: {repeatChecking}</p>
        </div>
        </>
    )
}

export default PatientCard