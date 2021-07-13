import React from 'react';
import "./Style/modal.css"

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header } = props;

    return (
        //모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal': 'modal'}>
            { open ? (
                <section>
                    <header>
                        {header} {/* ㄴㅇㄹ */}
                    </header>
                    <main>
                        <select className="tournament">
                            <option value="8">8강</option>
                            <option value="8" selected>4강</option>
                        </select>
                    </main>
                    <footer>
                        <button className="start_btn" onClick={close}>게임시작</button>
                    </footer>
                </section>
            ):null}
        </div>
    );
};

export default Modal;