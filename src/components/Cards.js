
import styled from "styled-components"
import greenIcon from "../assets/img/icone_certo.png"
import redIcon from "../assets/img/icone_erro.png"
import orangeIcon from "../assets/img/icone_quase.png"
import play from "../assets/img/seta_play.png"
import rotate from "../assets/img/seta_virar.png"
export default function Cards({cards,card,index,selectedCard,setSelectedCard,openCard,rotateCard,rotatedCard ,redButtonClicked,setRedButtonClicked,orangeButtonClicked,setOrangeButtonClicked,greenButtonClicked,setGreenButtonClicked,cardsDone,setCardsDone }){
  
  function colorButtonRed(index){
    if (!cardsDone.includes(index)){
      setRedButtonClicked([...redButtonClicked,index])
      setCardsDone([...cardsDone,index])}
      setSelectedCard([])
     
    }
    function colorButtonOrange(index){
      if (!cardsDone.includes(index)){
      setOrangeButtonClicked([...orangeButtonClicked,index])
      setCardsDone([...cardsDone,index])}
      setSelectedCard([])
    }
    function colorButtonGreen(index){
      if (!cardsDone.includes(index)){
      setGreenButtonClicked([...greenButtonClicked,index])
      setCardsDone([...cardsDone,index])}
      setSelectedCard([])
    }

  
    return (
    <>
        {selectedCard.includes(index)? //verifica se vai aparecer só o nome 
        //se incluir na carta aberta
        /* rotatedCard.includes(index)? // verifica se vai estar virada ou não  */
        <> 
        {rotatedCard.includes(index)? 
            <BackCard index={index} rotadedCard={rotatedCard}> <p>{card.resposta} </p>
            <Buttons>
               <Button color = "red" index ={index} onClick={()=>colorButtonRed(index)}>Não lembrei</Button> 
               <Button color="orange" index ={index} onClick={()=>colorButtonOrange(index)}>Quase não lembrei</Button> 
               <Button color="green" index ={index} onClick={()=>colorButtonGreen(index)}>Edureka!</Button> 
            </Buttons>
            </BackCard> :
            <FrontCard index={index} rotadedCard={rotatedCard}>{card.pergunta} <img src={rotate} onClick={()=>rotateCard(index)} alt="rotate"/></FrontCard>}
       </>
        :
        //se não incluir na carta aberta
        <ClosedCard index={index} cardsDone={cardsDone}greenButtonClicked={greenButtonClicked} orangeButtonClicked={orangeButtonClicked}redButtonClicked={redButtonClicked}> 
        <p>Pergunta {index + 1 }</p>  
        
        {greenButtonClicked.includes(index)?<img src = {greenIcon} alt="Green Icon"/>:orangeButtonClicked.includes(index)?<img src = {orangeIcon} alt="Orange Icon"/>:redButtonClicked.includes(index)?<img src = {redIcon} alt="Red Icon"/>:<img src={play} onClick={()=>openCard(index)} alt="play"/>
        
      }
        
        </ClosedCard>
        }
    </>
    )
}



const FrontCard=styled.div`
 
 width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;  
  line-height: 22px;
  color: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
    backface-visibility: hidden;
  transition: all .5s;
transform: ${props=> props.rotadedCard.includes(props.index)?"rotateY(180deg)" :"rotateY(0deg)"};
img{
  position: absolute;
  bottom: 10px;
  right: 10px;
  }
    
`
const BackCard= styled.div `

width: 300px;
  margin: 12px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backface-visibility: hidden;
  transition: all .5s;
  transform: ${props=> props.rotadedCard.includes(props.index)?"rotateY(0deg)" :"rotateY(180deg)"};
  p{
    padding: 15px;
  }
`

const ClosedCard=styled.div `
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
    font-family: 'Recursive';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
  text-decoration: ${props =>props.cardsDone.includes(props.index)?"line-through":"none"};
  color: ${props => props.greenButtonClicked.includes(props.index)? "#2FBE34":props.redButtonClicked.includes(props.index)? "#FF3030":props.orangeButtonClicked.includes(props.index)?"#FF922E":"#333333"}; 
  position: relative;
  }
  img{
    width:20px
  }

`
const Buttons=styled.div`
  display: flex;
  width: 270px;
  justify-content: space-between;
  margin: 13px;
  
`
const Button=styled.button`
width: 85px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  background: ${props=> props.color ==="red"?"#FF3030":props.color==="orange"?"#FF922E":props.color==="green"?"#2FBE34":"none"};
  border-radius: 5px;
  border: 1px solid blue;
  padding:5px;
  
`