
import * as S from "./style";
import interrog from "../../assets/interroga.png"

export default function Player({nome,pont, image}) {
   
    return (
<>
        <S.Container>
            <S.Name>{nome}</S.Name>
            <S.Image src={image}/>
            <S.Pont>Pontuação: {pont}</S.Pont>
        </S.Container>
</>
    )
}