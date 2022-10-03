import logo from "../assets/img/logo.png"
import styled from "styled-components"
import { cards, cards2, cards3, cards4 } from "../assets/cards"


export default function HomeScreen({ deck, changePage, setDeck }) {
  function witchCards(e) {

    switch (e.target.value) {
      case "cards":
        setDeck(cards);
        break;
      case "cards2":
        setDeck(cards2);
        break;
      case "cards3":
        setDeck(cards3);
        break;
      case "cards4":
        setDeck(cards4);
        break;
      default:
        console.log(e)

    }

  }
  return (
    <>
      <Logo> <img src={logo} alt="Logo" /> <h1><span>Edu</span>reka!</h1></Logo>
      <Select onChange={witchCards} defaultValue="">
        <option value="" disabled={true}>Escolha seu deck</option>
        <option value="cards">Ciências</option>
        <option value="cards2">Geografia</option>
        <option value="cards3">Matemática</option>
        <option value="cards4">Português</option>
      </Select>

      <Button onClick={() => changePage("GoalsScreen")}> Inicial Recall!</Button>
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

const Select = styled.select`
width: 246px;
height: 43px;
background: #FFFFFF;
border-radius: 5px;
margin-top:25px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;

color: #ADADAD;



`

const Button = styled.button`

width: 246px;
height: 54px;

background: #FFFFFF;
border: 1px solid #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
border-radius: 5px;

font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-align: center;
margin-top:18px;
color: #D70900;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`