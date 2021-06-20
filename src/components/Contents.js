import React from 'react';
import '../Style/Contents.css';
import { FlexBox } from './style';

const Contents = () => {
    return (
        <>
            <div className="contents">
                <FlexBox>
                    <div className="Fight1">
                        <img className='img' src={require("../imgs/itzyimgs/yeji.jpeg").default}/>
                    </div>
                    <div className="Fight1">
                        <img className='img' src={require("../imgs/itzyimgs/yuna.jpeg").default} />
                    </div>
                </FlexBox>
            </div>
            
        </>
    );
};

export default Contents;