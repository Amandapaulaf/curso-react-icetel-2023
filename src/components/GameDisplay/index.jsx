import * as S from "./style";
import SelectPlayer from '../SelectPlayer'
import Player from '../Player'
import { useState } from 'react'
import Choice from "../Choice";
import pedra from "../../assets/pedra.png"
import papel from "../../assets/papel.png"
import tesoura from "../../assets/tesoura.png"
import interrog from "../../assets/interroga.png"

export default function GameDisplay() {

    const [nome, setNome] = useState("");
    const [pontP, setPontP] = useState(0);
    const [pontC, setPontC] = useState(0);
    const [choiceP, setChoiceP] = useState(0);
    const [choiceC, setChoiceC] = useState(0);

    const optionsChoices = [
        {
            nome:"pedra",
             imagem:pedra
        },
        {
            nome:"papel",
            imagem:papel
        },
        {
            nome:"tesoura",
            imagem:pedra
        },
    ]
    return (
        <>
            <S.Container>
                <S.NameGame>JOKENPO</S.NameGame>
                <SelectPlayer nome={nome} setNome={setNome} />
                <S.ContainerPlayers>
                    

                    <S.ContainerControls>
                        <Choice optionsChoices={optionsChoices} setChoiceP={setChoiceP} />
                    </S.ContainerControls>

                    

                </S.ContainerPlayers>
            </S.Container>
        </>
    )
}