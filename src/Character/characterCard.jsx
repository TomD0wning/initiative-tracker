import React from 'react'


export const CharacterCard = () => {
    const charInfo = {name:"Tom", initivate:20,Hp:23}
    return(
        <div className="character-card">
            <p>Name: {charInfo.name}</p>
            <p>initivate: {charInfo.initivate}</p>
            <p>Hp: {charInfo.Hp}</p>
        </div>
    )
}