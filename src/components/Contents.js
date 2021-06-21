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
    return (
        <>
                <Vscontent>
                    <FlexBox>
                        <h1 className="title">당신의 이상형을 찾아라</h1>
                        <div className="Fight1">
                            <img className='img' src={require("../imgs/itzyimgs/yeji.jpeg").default}/>
                            <div className='name'>예지</div>
                        </div>
                        <div className="Fight1">
                            <img className='img' src={require("../imgs/itzyimgs/yuna.jpeg").default} />
                            <div className='name'>유나</div>
                        </div>
                    </FlexBox>
                </Vscontent>
                
            
        </>
    );
};

export default Contents;