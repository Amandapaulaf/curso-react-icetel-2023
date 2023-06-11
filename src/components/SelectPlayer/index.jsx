
import { useState } from "react";
import * as S from "./style";
export default function SelectPlayer({nome,setNome}) {
   

    const changeName= (e)=>{
        setNome(e.target.value)

    }


    return (
        <>
        <S.Containner>
            <S.LabelPlayer htmlFor="name">nome do jogador</S.LabelPlayer>
            <S.Playerinput id="name" maxLength={10} value={nome} onChange={()=>{changeName(e)}}/>
            {
                nome&&<S.ButtonStart>iniciar partida</S.ButtonStart>
            }
            
        </S.Containner>
        </>
    )
}