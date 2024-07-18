import { useState } from "react"
import Calendar from "../../Calendar/Calendar"
import * as S from "./PopNewCard.styled"
import { Subtitle } from "../../Shared/Common.styled"

function PopNewCard() {
   const [formData, setFormData] = useState({
      topic: "",
      title: "",
      description: "",
      date: "30.10.23",
      status: "Без статуса",
   })

   function handleInputChange(event) {
      const { name, value } = event.target

      console.log(value)

      setFormData({
         ...formData,
         [name]: value,
      })
   }

   return (
      <S.PopNewCard id="popNewCard">
         <S.PopNewCardContainer>
            <S.PopNewCardBlock>
               <S.PopNewCardContent>
                  <S.PopNewCardTitle>
                     Создание задачи
                  </S.PopNewCardTitle>

                  <S.PopNewCardClose href="#">
                     &#10006;
                  </S.PopNewCardClose>

                  <S.PopNewCardWrap>
                     <S.PopNewCardForm id="formNewCard" action="#">
                        <S.PopNewCardFormBlock>
                           <Subtitle htmlFor="formTitle">
                              Название задачи
                           </Subtitle>
                           <S.PopNewCardFormInput type="text" name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus value={formData.title} onChange={handleInputChange} />
                        </S.PopNewCardFormBlock>

                        <S.PopNewCardFormBlock>
                           <Subtitle htmlFor="textArea">
                              Описание задачи
                           </Subtitle>
                           <S.PopNewCardFormArea name="description" id="textArea" placeholder="Введите описание задачи..." value={formData.description} onChange={handleInputChange} />
                        </S.PopNewCardFormBlock>
                     </S.PopNewCardForm>
                     <Calendar />
                  </S.PopNewCardWrap>

                  <div className="pop-new-card__categories categories">
                     <p className="categories__p subttl">Категория</p>
                     <div className="categories__themes">
                        <div className="categories__theme _orange _active-category">
                           <p className="_orange">Web Design</p>
                        </div>
                        <div className="categories__theme _green">
                           <p className="_green">Research</p>
                        </div>
                        <div className="categories__theme _purple">
                           <p className="_purple">Copywriting</p>
                        </div>
                     </div>
                  </div>

                  <S.PopNewCardFormCreate id="btnCreate" onClick={() => { }}>
                     <a href="#">
                        Создать задачу
                     </a>
                  </S.PopNewCardFormCreate>
               </S.PopNewCardContent>
            </S.PopNewCardBlock>
         </S.PopNewCardContainer>
      </S.PopNewCard>
   )
}

export default PopNewCard
