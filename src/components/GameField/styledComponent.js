import styled from 'styled-components'

export const GameContainer = styled.div`
min-height: 100vh;
background-color: #223a5f;
display: flex;
flex-direction: column;
align-items:center;
`
export const ScoreBoardContainer = styled.div`
border: 2px solid #ffffff;
border-radius: 10px;
background-color: transparent;
display: flex;
justify-content: space-between;
padding: 10px;
width: 80%;
margin-top: 20px;`

export const GameItemContaier = styled.div``

export const GameHeading = styled.h1`
color:#ffffff;
font-size:15px;
font-weight:500;
font-family: "Bree Serif";`

export const GameScoreContainer = styled.div`
background-color:#ffffff;
display: flex;
flex-direction: column;
align-items: center;
padding:3px 8px 3px 8px;
width:100px;
border-radius:10px;`

export const ScoreHeading = styled.p`
font-size:20px;
font-weight:500;
color:#223a5f;`

export const TotalScore = styled.p`
font-size:15px;
font-weight:500;
color:#223a5f;
font-family:"Roboto"`

export const GameImageContianer = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: center;
width:50%;
margin-top:20px;
@media (max-width: 576px){
    width: 80%
}`

export const GameButton = styled.button`
border:none;
background-color:transparent;
cursor:pointer;`

export const GameImage = styled.img`
width:250px;
@media (max-width: 767px){
    width:100px;
}`

export const GameResultContainer = styled.div`
display: flex;

`

export const YouAndOppentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;`

export const Heading = styled.p`
color: #ffffff;
font-size: 20px;
font-family:"Roboto;
font-weight: 500;`

export const ResultImage = styled.img`
width: 250px;
`
export const ResultContent = styled.p`
color:#ffffff;
font-size: 30px;
font-family:"Roboto;
font-weight: 500;`

export const PlayAgainButton = styled.button`
padding: 8px 15px 8px 15px;
background-color: #ffffff;
border: none;
border-radius: 10px`

export const PopupContainer = styled.div`
align-self: flex-end;
margin-right: 30px`

export const PopupButton = styled.button``

export const RulesContainer = styled.div`
display: flex;
flex-direction: column; 
background-color: #ffffff;
width: 40%
height: 40vh;
padding:30px;`

export const CloseButton = styled.button`
text-align: end;
border:none;
background-color: transparent;
cursor: pointer;`

export const RulesImage = styled.img`
width:250px`
