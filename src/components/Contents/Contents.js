import React,{useState, useEffect} from 'react';
import * as S from './ContentsSt';
import Items from '../../Profile/Index';
import Modal from '../Modal/Modal';



const Contents = () => {
    const [modalOpen, setModalOpen] = useState(true);
    const [value, setValue] = useState();

    const closeModal = () => {
        setModalOpen(false);
    }


    const [idols, setIdols] = useState([]);

    const [displays, setDisplays] = useState([]);

    const [winners, setWinners] = useState([]); //선택한 값 저장

    useEffect(() => {
        const Garray = Items;
        
        console.log(Garray.length);
        Garray.sort(()=> Math.random() - Math.random());
        Garray.length = 4;
        console.log(Garray.length);
        setIdols(Garray);
        setDisplays([Garray[0],Garray[1]]);
    }, []);

// choice함수가 월드컵 토너먼트임
    const choice = (idol) => () => {
        if(idols.length <= 2){  // 남은 아이돌 수가 2보다 작거나 같을때
            if(winners.length === 0){ // 선택받은 사람의 길이 === 0 (1)
                setDisplays([idol]); // 아이돌 보여주기
            } else { // 16강 -> 8강 4강 -> 2강 등등 토너먼트의 단계가 올라갈때
                let updatedidol = [...winners, idol]; // 선택받은 애들이랑 나머지 아이돌
                setIdols(updatedidol); //
                setDisplays([updatedidol[0], updatedidol[1]]);
                setWinners([]);
            }
        }else if (idols.length > 2){ // 남은아이돌 길이가 2 이상일때
            setWinners([...winners, idol]); // 선택받았던자들과 아이돌을 선택받은자들로 설정
            setDisplays([idols[2], idols[3]]); // 3번째 4번째 보여주기
            setIdols(idols.slice(2)); // 아이돌설정을 아이돌배열 3번째 부터 끝까지 (3,4)
        }
    };

    return (
        <>
                <Modal open = {modalOpen} close={closeModal} header="이상형월드컵" />
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