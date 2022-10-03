import logo from "../assets/img/logo.png"
import styled from "styled-components"
export default function GoalsScreen({ chooseGoal, playRecall, disableButton }) {

    return (
        <>
            <Logo> <img src={logo} alt="Logo" /> <h1><span>Edu</span>reka!</h1></Logo>
            <Input data-identifier="goals-input" placeholder="Digite sua meta de zaps..." onChange={(e) => chooseGoal(e.target.value)}></Input>
            <Button disabled={disableButton} onClick={playRecall}>Iniciar Recall!</Button>
        </>
    )
}


const Logo = styled.div`
display:flex;
flex-direction:column;

margin-top:148px;

img{
    width: 136px;
  }
  h1{
    font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 10px;
  margin-top: 13px;
  box-sizing:border-box;
}
span{
    color:#fdff00
}
`

const Input = styled.input`
width: 246px;
height: 43px;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #FB6B6B;
opacity: 0.9;
margin-top:25px;
&::placeholder{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #ADADAD;
}
`

const Button = styled.button`
width: 246px;
height: 54px;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
margin-top:18px;
&:disabled{
    background: #E8E8E8;
    color: #C0C0C0;
    box-shadow:none;
}

`