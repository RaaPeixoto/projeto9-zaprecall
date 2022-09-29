import styled from "styled-components"
import cards from "../assets/cards"
import greenIcon from "../assets/img/icone_certo.png"
import redIcon from "../assets/img/icone_erro.png"
import orangeIcon from "../assets/img/icone_quase.png"
import emptyIcon from "../assets/img/icone_sem_resposta.png"
export default function Bottom({cardsDone,greenButtonClicked,orangeButtonClicked,redButtonClicked}){
console.log(cards)
console.log(greenButtonClicked)
    return (
        <Footer>
            
        <p>{cardsDone.length}/{cards.length}</p>
        <IconsContainer>
        {cards.map((i,index)=>greenButtonClicked.includes(index)?<img src = {greenIcon} alt="Green Icon"/>:orangeButtonClicked.includes(index)?<img src = {orangeIcon} alt="Orange Icon"/>:redButtonClicked.includes(index)?<img src = {redIcon} alt="Red Icon"/>:<img src = {emptyIcon} alt="Empty Icon"/>)
        
    } </IconsContainer>
        </Footer>
    )
}

const Footer = styled.div `
 width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  right :0;
  bottom: 0;
  display: flex;
flex-direction:column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  
`

const IconsContainer = styled.div `
display:flex;
margin-top :6px;
img{
    width:23px;
    margin-right:5px;
}
`