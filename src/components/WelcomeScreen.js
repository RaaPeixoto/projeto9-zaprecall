import logo from "../assets/img/logo.png"
import styled from "styled-components"

export default function WelcomeScreen({ changePage }) {
    return (
        <>
            <Logo> <img src={logo} alt="Logo" /> <h1><span>Edu</span>reka!</h1></Logo>

            <Button onClick={() => changePage("HomeScreen")}> Inicial Recall!</Button>
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
    font-family: 'Righteous',sans-serif;
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

const Button = styled.button`

width: 246px;
height: 54px;

background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;

font-family: 'Recursive',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
margin-top:18px;
color: #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`