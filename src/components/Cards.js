
import styled from "styled-components"
import greenIcon from "../assets/img/icone_certo.png"
import redIcon from "../assets/img/icone_erro.png"
import orangeIcon from "../assets/img/icone_quase.png"
import play from "../assets/img/seta_play.png"
import rotate from "../assets/img/seta_virar.png"
export default function Cards({ card, index, selectedCard, openCard, rotateCard, rotatedCard, redButtonClicked, orangeButtonClicked, greenButtonClicked, colorButton }) {


  return (
    <>
      {selectedCard.includes(index) ? //verifica se vai aparecer só o nome 
        //se incluir na carta aberta
        /* rotatedCard.includes(index)? // verifica se vai estar virada ou não  */

        <>

          <Card>
            <BackCard index={index} rotadedCard={rotatedCard}> <p data-identifier="flashcard-answer">{card.resposta} </p>
              <Buttons>
                <Button data-identifier="forgot-btn" color="#FF3030" value="red" index={index} onClick={(e) => colorButton(index, e.target.value)}>Não lembrei</Button>
                <Button data-identifier="almost-forgot-btn" color="#FF922E" value="orange" index={index} onClick={(e) => colorButton(index, e.target.value)}>Quase não lembrei</Button>
                <Button data-identifier="zap-btn" color="#2FBE34" value="green" index={index} onClick={(e) => colorButton(index, e.target.value)}>Edureka!</Button>
              </Buttons>
            </BackCard>
            <FrontCard index={index} rotadedCard={rotatedCard}> <p data-identifier="flashcard-question">{card.pergunta}</p> <img src={rotate} onClick={() => rotateCard(index)} alt="rotate" data-identifier="flashcard-turn-btn" />
            </FrontCard>
          </Card>

        </>
        :
        //se não incluir na carta aberta

        <>
          {greenButtonClicked.includes(index) ?
            <ClosedCard index={index} colorItem="#2FBE34" textDecoration="line-through" data-identifier="flashcard">
              <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
              <img src={greenIcon} alt="Green Icon" data-identifier="flashcard-status" />
            </ClosedCard>
            :

            orangeButtonClicked.includes(index) ?
              <ClosedCard index={index} colorItem="#FF922E" data-identifier="flashcard">
                <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
                <img src={orangeIcon} alt="Orange Icon" data-identifier="flashcard-status" />
              </ClosedCard>
              :
              redButtonClicked.includes(index) ?
                <ClosedCard index={index} colorItem="#FF3030" textDecoration="line-through" data-identifier="flashcard">
                  <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
                  <img src={redIcon} alt="Red Icon" data-identifier="flashcard-status" />
                </ClosedCard>
                :
                <ClosedCard index={index} colorItem="#333333" textDecoration="none" data-identifier="flashcard" >
                  <p data-identifier="flashcard-index-item">Pergunta {index + 1}</p>
                  <img src={play} onClick={() => openCard(index)} alt="play" data-identifier="flashcard-show-btn" />
                </ClosedCard>
          }

        </>
      }
    </>


  )
}


const Card = styled.div`
  margin: 12px;
  width: 300px;
  min-height: 150px;
  height:auto;
  position:relative;
`
const FrontCard = styled.div`
  padding: 15px;
height:100%;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;  
  line-height: 22px;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 1s;
  transform-style: preserve-3d;
top:0;
position:absolute;
backface-visibility: hidden;
transform: ${props => props.rotadedCard.includes(props.index) ? "rotateY(-180deg)" : "rotateY(0deg)"};
img{
  position: absolute;
  bottom: 10px;
  right: 10px;
  }
    
`
const BackCard = styled(FrontCard)`
 
  padding:0;
  transform: ${props => props.rotadedCard.includes(props.index) ? "rotateY(0deg)" : "rotateY(180deg)"};
  p{
    padding: 15px;

  }
`

const ClosedCard = styled.div`
  width: 300px;
  height: 65px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
  font-family: 'Recursive',sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
  text-decoration: ${props => props.textDecoration};
  color: ${props => props.colorItem}; 
  position: relative;
  }
  img{
    width:20px
  }

`
const Buttons = styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
  margin: 20px 13px;
 
  
`
const Button = styled.button`
width: 85px;
  font-family: 'Recursive',sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props => props.color};
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
  
`