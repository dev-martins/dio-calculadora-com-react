import styled from "styled-components"

export const Container = styled.div `
    width:100%;
    height:100vh;
    background-color:#fafafa;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:auto;
`

export const Content = styled.div `
    background-color:#fff;
    width:50%;
    min-height:350px;
    box-shadow:5px 4px 14px #000;
`

export const Row = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

export const Column = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`