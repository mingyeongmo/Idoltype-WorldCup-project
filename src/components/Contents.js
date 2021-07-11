import React,{useState, useEffect} from 'react';
// import { FlexBox } from './Style/ContentsSt';
// import { Vscontent } from './Style/ContentsSt';
// import { Title } from './Style/ContentsSt';
import * as S from './Style/ContentsSt';
//import { ReactComponent as Yeji1 } from '../Assets/itzyimgs/yeji.svg';
import Items from '../components/Profile/Index';

const Contents = () => {
    const [idols, setIdols] = useState([]);

    const [displays, setDisplays] = useState([]);

    const [winners, setWinners] = useState([]);

    useEffect(() => {
        Items.sort(()=> Math.random() - 0.5);
        setIdols(Items);
        setDisplays([Items[0],Items[1]]);
    }, []);

    const choice = (idol) => () => {
        if(idols.length <= 2){
            if(winners.length === 0){
                setDisplays([idol]);
            } else {
                let updatedidol = [...winners, idol];
                setIdols(updatedidol);
                setDisplays([updatedidol[0], updatedidol[1]]);
                setWinners([]);
            }
        }else if (idols.length > 2){
            setWinners([...winners, idol]);
            setDisplays([idols[2], idols[3]]);
            setIdols(idols.slice(2));
        }
    };

    return (
        <>
                <S.Vscontent> {/* style*/}
                    <S.FlexBox> {/* style*/}
                        <S.Title>당신의 이상형을 찾아라</S.Title>
                        {displays.map(d => {
                            return (
                                <S.Fight1 key={d.name} onClick={choice(d)}>
                                    <S.Img src={d.src.default} />
                                    <S.Name>{d.name}</S.Name>             
                                </S.Fight1>
                            )
                        })}
                    </S.FlexBox>
                </S.Vscontent>
                
            
        </>
    );
};

export default Contents;