import Button from "../../Shared/Button/Button"
import * as S from "./PopExit.styled"

function PopExit() {
   return (
      <S.PopExit id="popExit">
         <S.PopExitContainer>
            <S.PopExitBlock>
               <S.PopExitTitle>
                  <h2>
                     Выйти из аккаунта?
                  </h2>
               </S.PopExitTitle>
               <form className="pop-exit__form" id="formExit" action="#">
                  <S.PopExitFormGroup>
                     <Button isDefault={true} id="exitYes">
                        <a href="modal/signin.html">Да, выйти</a>
                     </Button>
                     <Button isDefault={false} id="exitNo">
                        <a href="main.html">Нет, остаться</a>
                     </Button>
                  </S.PopExitFormGroup>
               </form>
            </S.PopExitBlock>
         </S.PopExitContainer>
      </S.PopExit>
   )
}

export default PopExit
