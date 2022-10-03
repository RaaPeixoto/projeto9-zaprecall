import { useState } from "react"
import styled from "styled-components"
import GlobalStyle from "../assets/GlobalStyle.js"
import HomeScreen from "./HomeScreen.js"
import PlayScreen from "./PlayScreen.js"
import GoalsScreen from "./GoalsScreen.js"
import FinishScreen from "./FinishScreen.js"
import WelcomeScreen from "./WelcomeScreen.js"
export default function App() {
    const [disableButton, setDisableButton] = useState(true)
    const [goalNumber, setGoalNumber] = useState(0)
    const [deck, setDeck] = useState("");
    const [selectedCard, setSelectedCard] = useState([])
    const [rotatedCard, setRotatedCard] = useState([])
    const [redButtonClicked, setRedButtonClicked] = useState([])
    const [orangeButtonClicked, setOrangeButtonClicked] = useState([])
    const [greenButtonClicked, setGreenButtonClicked] = useState([])
    const [cardsDone, setCardsDone] = useState([])
    const [currentScreen, setScreen] = useState("WelcomeScreen")

    function restart() {
        setDisableButton(true)
        setGoalNumber(0)
        setDeck("")
        setSelectedCard([])
        setRotatedCard([])
        setRedButtonClicked([])
        setOrangeButtonClicked([])
        setGreenButtonClicked([])
        setCardsDone([])
        setScreen("HomeScreen")
    }
    function changePage(e) {

        if (currentScreen === "WelcomeScreen") {
            setScreen(e)
        }
        else if (deck !== "") {
            setScreen(e)
        }

    }

    function chooseGoal(e) {

        setDisableButton(false)
        setGoalNumber(e)
        console.log(e)
    }
    function playRecall() {
        if (!isNaN(goalNumber) && 1 < goalNumber < 8) {
            changePage("PlayScreen")
        } else {
            alert("Por favor digite um número de 1 a 8")
        }
    }

    function openCard(index) {
        setSelectedCard([])
        setSelectedCard([index])

    }
    function rotateCard(index) {
        setRotatedCard([])
        setRotatedCard([index])
    }

    return (
        <ScreenContainer>

            {currentScreen === "WelcomeScreen" ?
                <WelcomeScreen changePage={changePage} /> :
                currentScreen === "HomeScreen" ?
                    <HomeScreen changePage={changePage} setDeck={setDeck} /> :
                    currentScreen === "GoalsScreen" ?
                        <GoalsScreen changePage={changePage} chooseGoal={chooseGoal} playRecall={playRecall} disableButton={disableButton} /> :
                        currentScreen === "PlayScreen" ?
                            <PlayScreen
                                deck={deck}
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
                                setScreen={setScreen} /> :
                            currentScreen === "FinishScreen" ?
                                <FinishScreen greenButtonClicked={greenButtonClicked} goalNumber={goalNumber} restart={restart} /> :
                                <></>
            }
            <GlobalStyle />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
 padding-bottom:100px;
`