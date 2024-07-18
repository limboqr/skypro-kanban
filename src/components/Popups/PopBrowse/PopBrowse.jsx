import Calendar from "../../Calendar/Calendar"
import Button from "../../Shared/Button/Button"
import * as S from "./PopBrowse.styled"
import { Subtitle } from "../../Shared/Common.styled"


function PopBrowse() {
   return (
      <S.PopBrowse id="popBrowse">
         <S.PopBrowseContainer>
            <S.PopBrowseBlock>
               <S.PopBrowseContent>
                  <S.PopBrowseTopBlock>
                     <S.PopBrowseTitle>
                        Название задачи
                     </S.PopBrowseTitle>
                     <div className="categories__theme theme-top _orange _active-category">
                        <p className="_orange">
                           Web Design
                        </p>
                     </div>
                  </S.PopBrowseTopBlock>

                  <div className="pop-browse__status status">
                     <p className="status__p subttl">Статус</p>
                     <div className="status__themes">
                        <div className="status__theme _hide">
                           <p>Без статуса</p>
                        </div>
                        <div className="status__theme _gray">
                           <p className="_gray">Нужно сделать</p>
                        </div>
                        <div className="status__theme _hide">
                           <p>В работе</p>
                        </div>
                        <div className="status__theme _hide">
                           <p>Тестирование</p>
                        </div>
                        <div className="status__theme _hide">
                           <p>Готово</p>
                        </div>
                     </div>
                  </div>

                  <S.PopBrowseWrap>
                     <S.PopBrowseForm id="formBrowseCard" action="#">
                        <S.PopBrowseFormBlock>
                           <Subtitle htmlFor="textArea01">
                              Описание задачи
                           </Subtitle>
                           <S.PopBrowseFormArea name="text" id="textArea01" readOnly placeholder="Введите описание задачи..." />
                        </S.PopBrowseFormBlock>
                     </S.PopBrowseForm>
                     <Calendar />
                  </S.PopBrowseWrap>

                  <div className="theme-down__categories theme-down">
                     <p className="categories__p subttl">Категория</p>
                     <div className="categories__theme _orange _active-category">
                        <p className="_orange">Web Design</p>
                     </div>
                  </div>

                  <S.PopBrowseButtonBrowseAndEdit>
                     {/* <S.PopBrowseButtonGroup> */}
                        <Button isDefault={false}>
                           <a href="#">Редактировать задачу</a>
                        </Button>
                        <Button hidden={true} isDefault={true}>
                           <a href="#">Сохранить</a>
                        </Button>
                        <Button hidden={true} isDefault={false}>
                           <a href="#">Отменить</a>
                        </Button>
                        <Button isDefault={false}>
                           <a href="#">Удалить задачу</a>
                        </Button>
                     {/* </S.PopBrowseButtonGroup> */}
                     <Button isDefault={true}>
                        <a href="#">Закрыть</a>
                     </Button>
                  </S.PopBrowseButtonBrowseAndEdit>
               </S.PopBrowseContent>
            </S.PopBrowseBlock>
         </S.PopBrowseContainer>
      </S.PopBrowse>
   )
}

export default PopBrowse
