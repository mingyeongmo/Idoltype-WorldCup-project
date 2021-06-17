import React from 'react';
import ryujin from '../imgs/itzyimgs/ryujin.jpeg';


const Img1 = ({name}) => {
    return (
        <div>
            <img src={ryujin}/>
        </div>
    );
};

Img1.defaultProps = {
    name:'default',
}

export default Img1;

