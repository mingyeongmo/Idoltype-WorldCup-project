import React,{useState, useEffect} from 'react';
import { FlexBox } from './Style/ContentsSt';
import { Vscontent } from './Style/ContentsSt';

const items = [
    {
        name:"유나",
        src:require("../imgs/itzyimgs/yuna.jpeg")
    },
    {
        name:"예지",
        src:require("../imgs/itzyimgs/yeji.jpeg")
    },
    {
        name:"류진",
        src:require("../imgs/itzyimgs/ryujin.jpeg")
    },
    {
        name:"채령",
        src:require("../imgs/itzyimgs/chaeryeong.jpeg")
    },
]


const Contents = () => {
    const [idols, setIdols] = useState([]);

    const [displays, setDisplays] = useState([]);

    const [winners, setWinners] = useState([]);

    useEffect(() => {
        items.sort(()=> Math.random() - 0.5); // 아이템 배열을 랜덤으로 정리 해줌.
        setIdols(items); // idols의 상태가 아이템으로 설정됨.
        setDisplays([items[0],items[1]]); // 디스플레이에 보여지는 화면이 첫번째와 두번째 값.
    }, []); //<- deps배열이고 null이면 맨 처음 화면이 나타날때만 useEffect 함수가 호출된다.

    const choice = (idol) => () => {
        if(idols.length <= 2){ // 아이돌의 길이(남은 배열길이)가 2보다 작거나 같다면(최종 후보)
            if(winners.length === 0){ // 우승자의 길이가 0이라면
                setDisplays([idol]); // 화면에 남은 최종 아이돌 출력.
            } else {
                let updatedidol = [...winners, idol]; // let(변수 재할당가능,재선언은 불가)
                // 
                setIdols(updatedidol);
                setDisplays([updatedidol[0], updatedidol[1]]);
                setWinners([]);
            }
        }else if (idols.length > 2){ // 아이돌의 길이가 2보다 크다면
            setWinners([...winners, idol]) // 남은 위너와 아이돌
            setDisplays([idols[2], idols[3]])
            setIdols(idols.slice(2))
        }
    };

    return (
        <>
                <Vscontent>
                    <FlexBox>
                        <h1 className="title">당신의 이상형을 찾아라</h1>
                        {displays.map(d => {
                            return (
                                <div className="Fight1" key={d.name} onClick={choice(d)}>
                                    <img className='img' src={d.src.default}/>
                                    <div className='name'>{d.name}</div>
                                </div>
                            )
                        })}
                    </FlexBox>
                </Vscontent>
                
            
        </>
    );
};

export default Contents;