import React from 'react'
import styled from 'styled-components'

const UsDiv = styled.div`
width:99%;
display:flex;
height:30px;
justify-content:space-between;
align-items:center;
font-size:15px;
`
const Us = styled.div`
color:purple;
`
const ContDiv = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:35%;

`;

export const Footer = () => {
    return (
        <UsDiv>
            <ContDiv>
                <Us>Contact Us</Us>
                <Us>Declaimer</Us>
                <Us>About us</Us>
                <Us>Policy</Us>
            </ContDiv>
            <p>Copyright@viktoh</p>
        </UsDiv>
    )
}
