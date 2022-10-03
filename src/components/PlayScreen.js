import LogoTop from "./LogoTop"
import Cards from "./Cards"
import Bottom from "./Bottom"
export default function PlayScreen({ deck, selectedCard, setSelectedCard, openCard, rotateCard, rotatedCard, redButtonClicked, setRedButtonClicked, orangeButtonClicked, setOrangeButtonClicked, greenButtonClicked, setGreenButtonClicked, cardsDone, setCardsDone, setScreen }) {
  console.log("deck fora", deck)
  function colorButton(index, value) {
    switch (value) {
      case "red":
        setRedButtonClicked([...redButtonClicked, index])

        break;
      case "orange":
        setOrangeButtonClicked([...orangeButtonClicked, index])


        break;
      case "green":
        setGreenButtonClicked([...greenButtonClicked, index])
        break;
      default:
        console.log(index)

    }

    setCardsDone([...cardsDone, index])
    setSelectedCard([])

    if ([...cardsDone, index].length === deck.length) {
      finishRecall();
    }

  }

  function finishRecall() {
    setScreen("FinishScreen")
  }

  return (
    <>
      <LogoTop />
      {deck.map((card, index) =>
        <Cards
          card={card}
          key={index}
          index={index}
          selectedCard={selectedCard}
          openCard={openCard}
          rotateCard={rotateCard}
          rotatedCard={rotatedCard}
          redButtonClicked={redButtonClicked}
          orangeButtonClicked={orangeButtonClicked}
          greenButtonClicked={greenButtonClicked}
          colorButton={colorButton}
          setScreen={setScreen}
        />)}
      <Bottom cardsDone={cardsDone} greenButtonClicked={greenButtonClicked} orangeButtonClicked={orangeButtonClicked} redButtonClicked={redButtonClicked} deck={deck} />
    </  >
  )
}