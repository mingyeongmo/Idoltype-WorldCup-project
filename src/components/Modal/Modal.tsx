import React from "react";
import "./modal.css";
import * as S from "./ModalSt";
import Option from "./M_Option";

interface Three {
  open: boolean;
  close: () => void;
  header: string;
}

const Modal = ({ open, close, header }: Three) => {
  // const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  // const { open, close, header } = props;

  return (
    //모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <S.Modal_Section>
          <S.Modal_Header>{header}</S.Modal_Header>
          <S.Modal_Main>
            <Option />
          </S.Modal_Main>
          <S.Modal_Footer>
            <div className="hi">
              <S.Modal_stbtn onClick={close}>게임시작</S.Modal_stbtn>
            </div>
          </S.Modal_Footer>
        </S.Modal_Section>
      ) : null}
    </div>
  );
};

export default Modal;
