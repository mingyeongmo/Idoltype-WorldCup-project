import React from 'react';
import { Modal_Select } from './ModalSt';
const M_Option = () => {

    return (
        <Modal_Select>
            <option value="16" key="1" >16강</option>
            <option value="8" key="2" selected>8강</option>
            <option value="4" key="3">4강</option>
        </Modal_Select>
    );

    
};

export default M_Option;