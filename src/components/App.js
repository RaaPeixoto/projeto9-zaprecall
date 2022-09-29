import { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "../assets/GlobalStyle.js"
import Cards from "./Cards.js"
import LogoTop from "./LogoTop.js"
import cards from "../assets/cards.js"
import Bottom from "./Bottom.js"
export default function App (){
    const [selectedCard,setSelectedCard] = useState([])
    const [rotatedCard,setRotatedCard] = useState([])
    const [redButtonClicked,setRedButtonClicked]=useState([])
    const [orangeButtonClicked,setOrangeButtonClicked]=useState([])
    const [greenButtonClicked,setGreenButtonClicked]=useState([])
    const [cardsDone,setCardsDone]=useState([])
   console.log(greenButtonClicked)
    function openCard(index){
        setSelectedCard ([])
        setSelectedCard ([index])
        
    }
    function rotateCard (index){
        setRotatedCard ([])
        setRotatedCard ([index])
    }
    return(
        <ScreenContainer>
        <LogoTop/>  
        {cards.map((card,index)=>
        <Cards 
        cards={cards}
        card={card} 
        key={index} 
        index={index} 
        selectedCard={selectedCard}
        setSelectedCard={setSelectedCard}
        openCard={openCard}
        rotateCard={rotateCard} 
        rotatedCard={rotatedCard}
        redButtonClicked={redButtonClicked}
        setRedButtonClicked={setRedButtonClicked}
        orangeButtonClicked={orangeButtonClicked}
        setOrangeButtonClicked={setOrangeButtonClicked}
        greenButtonClicked={greenButtonClicked}
        setGreenButtonClicked={setGreenButtonClicked}
        cardsDone={cardsDone}
        setCardsDone={setCardsDone}
        />)}
        <Bottom cardsDone={cardsDone}greenButtonClicked={greenButtonClicked}orangeButtonClicked={orangeButtonClicked}redButtonClicked={redButtonClicked}/>
        <GlobalStyle/>
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div `
background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`