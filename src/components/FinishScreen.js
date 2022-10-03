import congrats from "../assets/img/party.png"
import sad from "../assets/img/sad.png"
import logo from "../assets/img/logo.png"
import styled from "styled-components"
export default function FinishScreen({ greenButtonClicked, goalNumber, restart }) {

  return (
    <>
      <Background />

      {(greenButtonClicked.length) >= goalNumber ?
        <Container>
          <p>Parabéns <img src={congrats} alt="parabéns" /></p>
          <Resultado>
            <p>Sua meta eram {goalNumber} acertos e você acertou {greenButtonClicked.length} cards!</p>
          </Resultado>
          <Button onClick={restart}> Voltar para a tela inicial</Button>
        </Container>
        :
        <Container>
          <p>Putz <img src={sad} alt="sad" /></p>
          <Resultado>
            <p>Sua meta eram {goalNumber} acertos e você acertou {greenButtonClicked.length} cards!</p> <p>Você ainda não conseguiu, continue estudando,acredito em você!</p>
          </Resultado>
          <Button onClick={restart}> Voltar para a tela inicial</Button>
        </Container>
      }
    </>
  )
}
const Background = styled.div`
background-image: url(${logo});
background-size:50px;
height: 100vh;
width:100vw;
opacity:0.2;
box-sizing:border-box;
position:absolute;
`
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-top:200px;
z-index:2;
background-color:#fb6b6b;
width:100%;

p{
font-family: 'Recursive',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 50px;
  color:#ffb500;
 }   
  img{
    width:40px;
  }

`
const Resultado = styled.div`
background-color:#fffed4;
width:100%;
height:200px;
padding: 10px 20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

  p{
    color:#333333;
    font-size: 20px;
    margin-bottom:30px;
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


