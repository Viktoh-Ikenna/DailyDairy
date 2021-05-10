import React from 'react';
import styled from 'styled-components';
import ogo from "./images/Logo.png"


const NavBar = styled.div`
width:100%;
display:flex;
height:60px;
justify-content:space-between;
align-items:center;

`;
const LogsDiv = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:22%;
`;
const Logs = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:10px 20px;
border:2px solid purple;
cursor:pointer;
&:hover{
    transition:All .4s ease-in-out;
    background-color:purple;
}
`;
const LogoDiv = styled.div`
margin:2.5px 5px;
`;
const Logo = styled.img`

`;
const Menu = styled.div`
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
font-size:18px;
cursor:pointer;
padding:3px 6px;
border-radius:20px;
display:flex;
justify-content:space-between;
align-items:center;

&::before,&::after{
    content:'';
    width:3px;
    height:30px;
    background-color:orange;
    display:absolute;
   margin:5px;
   opacity:0;

}
&::before{
    transform:translateX(50px)
}
&:after{
    transform:translateX(-50px)
}
&:hover::before,&:hover::after{
    transform:translateX(0);
    transition:All .8s ease-in-out;
    opacity:1;
}
`;
const MenuCont = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width:30%;
`
export const Nav = () => {
    return (
        <div>
            <NavBar >
                <LogoDiv >
                    <Logo src={ogo} />
                </LogoDiv>
                <MenuCont>
                    <Menu>About</Menu>
                    <Menu>Features</Menu>
                    <Menu>Reviews</Menu>

                </MenuCont>
                <LogsDiv>
                    <Logs>Login</Logs>
                    <Logs>Create Account</Logs>
                </LogsDiv>
            </NavBar>
        </div>
    )
}
