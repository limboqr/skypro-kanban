import Button from "../../Shared/Button/Button"
import * as S from "./PopUser.styled"

function PopUser() {
   return (
      <S.HeaderPopUserSet id="user-set-target">
         {/* {<a href="">x</a>} */}
         <S.PopUserSetName>
            Ivan Ivanov
         </S.PopUserSetName>
         <S.PopUserSetMail>
            ivan.ivanov@gmail.com
         </S.PopUserSetMail>
         <S.PopUserSetTheme>
            <p>Темная тема</p>
            <input type="checkbox" className="checkbox" name="checkbox" />
         </S.PopUserSetTheme>
         <Button type="button" isDefault={false}>
            <a href="#popExit">Выйти</a>
         </Button>
         {/* <button className="_hover03">
            <a href="#popExit">Выйти</a>
         </button> */}
      </S.HeaderPopUserSet>
   )
}

export default PopUser
