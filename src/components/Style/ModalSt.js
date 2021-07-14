import styled from 'styled-components';

export const modal = styled.div``;

export const Modal_Section = styled.section`
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: #fff;

    animation: modal-show 0.3s;
    overflow: hidden;
`;

export const Modal_Header = styled.header`
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
`;

export const Modal_Main = styled.main`
    padding: 16px;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
`;

export const Modal_Footer = styled.footer`
    padding: 12px 16px;
    text-align: right;
`;

export const Modal_stbtn = styled.button`
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;

    outline: none;
    cursor: pointer;
    border: 0;
`;