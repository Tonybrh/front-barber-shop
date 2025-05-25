import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    color: white;
    width: 100%;
    height: 100%;
`

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    background-color: black;
    height: 100%;
`

export const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
`

export const StyledForm = styled.form`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    gap: 20px;
    margin-top: 100px;
`; 