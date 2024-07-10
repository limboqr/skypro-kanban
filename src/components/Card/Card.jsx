import Calendar from "../Graphics/Calendar"
import * as S from "./Card.styled"


function Card({ topic, title, date }) {
   return (
      <S.CardsItem>
         <S.Card>
            <S.CardGroup>
               <S.CardTopic $topic={topic}>
                  <S.TopicText>
                     {topic}
                  </S.TopicText>
               </S.CardTopic>
               <a href="#popBrowse" target="_self">
                  <S.CardBtn>
                     <S.CardBtnDiv></S.CardBtnDiv>
                     <S.CardBtnDiv></S.CardBtnDiv>
                     <S.CardBtnDiv></S.CardBtnDiv>
                  </S.CardBtn>
               </a>
            </S.CardGroup>
            <S.CardContent>
               <a href="#" target="_blank">
                  <S.CardTitle>
                     {title}
                  </S.CardTitle>
               </a>
               <S.CardDate>
                  <Calendar />
                  <S.CardDateP>
                     {date}
                  </S.CardDateP>
               </S.CardDate>
            </S.CardContent>
         </S.Card>
      </S.CardsItem>
   )
}

export default Card
