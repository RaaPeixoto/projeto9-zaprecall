import styled from "styled-components"
import greenIcon from "../assets/img/icone_certo.png"
import redIcon from "../assets/img/icone_erro.png"
import orangeIcon from "../assets/img/icone_quase.png"
import emptyIcon from "../assets/img/icone_sem_resposta.png"
export default function Bottom({ cardsDone, greenButtonClicked, orangeButtonClicked, redButtonClicked, deck }) {

    console.log(greenButtonClicked)
    return (
        <Footer>

            <p data-identifier="flashcard-counter">{cardsDone.length}/{deck.length}</p>
            <IconsContainer>
                {deck.map((i, index) => greenButtonClicked.includes(index) ?
                    <img src={greenIcon} alt="Green Icon" key={index} />
                    :
                    orangeButtonClicked.includes(index) ?
                        <img src={orangeIcon} alt="Orange Icon" key={index} />
                        :
                        redButtonClicked.includes(index) ?
                            <img src={redIcon} alt="Red Icon" key={index} />
                            :
                            <img src={emptyIcon} alt="Empty Icon" key={index} />)

                } </IconsContainer>
        </Footer>
    )
}

const Footer = styled.div`
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
  font-family: 'Recursive',sans-serif;
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
  
  
`

const IconsContainer = styled.div`
display:flex;
margin-top :6px;

img{
    width:23px;
    margin-right:5px;
}
`