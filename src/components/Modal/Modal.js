import React from 'react';
import "./modal.css"
import * as S from './ModalSt';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header} = props;

    

    return (
        //모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal': 'modal'}>
            { open ? (
                <S.Modal_Section>
                <S.Modal_Header>
                    {header}
                </S.Modal_Header>
                <S.Modal_Main>
                    <S.Modal_Select>
                        <S.Modal_Option value="16">16강</S.Modal_Option>
                        <S.Modal_Option value="8" selected>8강</S.Modal_Option>
                        <S.Modal_Option value="4">4강</S.Modal_Option>
                    </S.Modal_Select>
                </S.Modal_Main>
                <S.Modal_Footer>
                    <S.Modal_stbtn onClick={close}>게임시작</S.Modal_stbtn>
                </S.Modal_Footer>
            </S.Modal_Section>
            ): null}
        </div>
    );
};

export default Modal;