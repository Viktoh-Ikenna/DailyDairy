import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { BiRightArrowCircle } from 'react-icons/bi';
import one from "../images/Banner1.png"
import two from "../images/Banner2.png"
import Background1 from "../images/Background1.png"

const Cont = styled.div`
width:100%;
display:flex;
height:600px;
justify-content:space-between;
align-items:center;

`;
const HeaderText = styled.div`
width:40%;
display:flex;
flex-direction:column;
height:50%;
justify-content:space-between;
align-items:center;
border:2px solid orange;
margin:0 20px;


`;
const TextP = styled.h3`
width:50%;
font-size:24px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;
const Button = styled.div`
display:flex;
justify-content:center;
align-items:center;
padding:10px 20px;
border:2px solid purple;
background-color:purple;
box-shadow:0px 0px 2px 1px white;
cursor:pointer;
&:hover{
    transition:All .4s ease-in-out;
    background-color:white;
    color:purple;
    box-shadow:0px 0px 10px 1px purple;
}
`;
const shift = keyframes`
from{
    margin-left:0px;
}
to{
    margin-left:2px;
}`
const Arr = styled(BiRightArrowCircle)`
padding:0 3px;
animation:${shift} 1s ease-in-out infinite ;
animation-delay:5s;
`;

const Headerimg = styled.div`
width:50%;
display:flex;
flex-direction:column;
height:75%;
justify-content:space-between;
align-items:center;
margin:0 20px;
overflow-x:hidden;

`;
const Slider = styled.div`
width:100%;
display:flex;
height:90%;
justify-content:space-between;
transition:All 1s ease-in-out;
align-items:center;
margin-left:${props => props.slide !== true ? '-200%' : '0'};


`;
const Banner = styled.img`
width:100%;
height:100%;
`;
const Kpom = styled.div`;
border-radius:50%;
width:4px;
height:4px;
border:3px solid white;
cursor:pointer;
background-color:${props => {
        if (props.init === true) {
            return 'white'
        } else if (props.bas === false) {
            return 'white'
        } else {
            return 'transparent'
        }
    }}
`;

const Cont2 = styled.div`
width:100%;
display:flex;
min-height:500px;
justify-content:center;
align-items:center;
background-color:white;
flex-direction:column;
transition:All 1s ease-in-out;

`;
const ItemDiv = styled.div`
width:${props => props.set === true ? '100%' : '20%'};
display:flex;
min-height:80%;
flex-wrap:wrap;
justify-content:space-evenly;
transition:All 1s ease-in-out;
align-items:center;
color:black;

`
const Item = styled.div`
width:300px;
height:300px;
background-color:purple;
color:white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin:3px;
border-radius:10px;
transition:All .4s ease-in-out;
flex-flow:wrap;
box-shadow:0px 0px 10px 5px white;
&:hover{
    box-shadow:0px 0px 10px 2px black;  
}
`
const H2 = styled.h2`
width:70%;
padding:10px 0;
border-bottom:1px solid rgb(37, 32, 32);
color:purple;
text-align:center
`


const Cont3 = styled.div`
width:100%;
display:flex;
min-height:700px;
justify-content: space-between;
align-items:flex-end;
background-color:white;
background:url(${Background1});
transition:All 1s ease-in-out;

`;
const FeaturesDiv = styled.div`
width:25%;
height:125px;
border:3px solid purple;
margin-bottom:100px;
margin-left:5px;
background-color:white;
display:flex;
align-items:center;
flex-direction:column;
`
const H3 = styled.h3`
margin:0
width:60%;
padding:10px 0;
border-bottom:1px solid rgb(37, 32, 32);
color:purple;
text-align:center
`
const SecButton=styled(Button)`
width:70%;
`;
const FLI=styled.div`
width:100%;
padding:10px 20px;
border:2px solid white;
`;

const Cont4 = styled.div`
width:100%;
display:flex;
min-height:500px;
justify-content: space-between;
align-items:flex-end;
background-color:white;
transition:All 1s ease-in-out;

`;
const Slider2 = styled(Slider)`

`;
const Kpom2 = styled(Kpom)`

`;
export const Landing = () => {
    const [text, setText] = useState('')
    const [slide, setSlide] = useState(false);
    const [anime, setAn] = useState(false)

    window.onscroll = () => {
        if (document.querySelector('#loca').getBoundingClientRect().top - 700 < 0) {
            setAn(true)
        }
    }
    useEffect(() => {
        const content = 'Wanna Keep Note of Your Daily Thoughts ? This is The Right Place. Click Below to Join..'
        for (let i = 0; i < content.length; i++) {
            setTimeout(() => {
                setText(content.split('').splice(0, i).join(''))
            }, i * 100)
        }


    }, [])

    useEffect(() => {
        let id = setTimeout(() => {
            setSlide(prev => !prev);
        }, 20000)
        return () => clearTimeout(id)
    }, [slide])
    return (
        <>
            <Cont>
                <HeaderText >
                    <TextP>{text}</TextP>
                    <Button>Join Us <Arr /></Button>
                </HeaderText>
                <Headerimg>
                    <Slider slide={slide} >
                        <Banner src={one} />
                        <Banner src={two} />
                    </Slider>
                    <div style={{ width: 30, display: 'flex' }}>
                        <Kpom init={slide} onClick={() => setSlide(true)} />
                        <Kpom bas={slide} onClick={() => setSlide(false)} />
                    </div>
                </Headerimg>

            </Cont>
            <Cont2>
                <H2>About DailyDairy/Journal Writing Resources</H2>
                <ItemDiv set={anime}>
                    <Item>
                        <h4>Journaling Basics</h4>
                        <ul>
                            <li>What is a Journal?</li>
                            <li>What is a Journal Entry?</li>
                            <li>Benefits of Journaling</li>
                            <li>Journal Types</li>
                            <li>How to Write a Journal</li>
                            <li>Journal Examples</li>
                        </ul>
                    </Item>
                    <Item>
                        <h4 id='loca'>Types of Journal</h4>
                        <ul>
                            <li>Dream Journal</li>
                            <li>Prayer Journal</li>
                            <li>Pregnancy Journal</li>
                            <li>Reflective Journal</li>
                            <li>5 Year Journal</li>
                        </ul>

                    </Item>
                    <Item>
                        <h4>Diary Basics</h4>
                        <ul>
                            <li>What is a Diary Entry?</li>
                            <li>How to Write Diary</li>
                            <li>What is a Diary?</li>
                            <li>Diary Software</li>
                            <li>Diary Templates</li>
                            <li>Digital Diaries</li>
                        </ul>
                    </Item>
                    <Item>
                        <h4>Types of Diaries</h4>
                        <ul>
                            <li>School Diary</li>
                            <li>Health Diary</li>
                            <li>Secret Diary</li>
                            <li>Wedding Diary</li>
                        </ul>
                    </Item>
                </ItemDiv>
            </Cont2>
            <Cont3>
                {/* <Slider2 >

                </Slider2>
                <div style={{ width: 30, display: 'flex' }}>
                    <Kpom2 />
                    <Kpom2 />
                </div>*/}
                <FeaturesDiv>
                    <H3>Why Are we Unique ?</H3>
                    <SecButton>Create Account <Arr /></SecButton>
                </FeaturesDiv>

                <div style={{width:'30%',marginBottom:70,marginLeft:'10%'}}>
                    <FLI>Our Securityis the best</FLI>
                    <FLI>Very Easy to Access</FLI>
                    <FLI>Totally Free</FLI>
                    <FLI>Share only When u Need To</FLI>
                </div>
            </Cont3>
            <Cont4>

            </Cont4>
        </>
    )
}
