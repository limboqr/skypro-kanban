import { useState } from "react"
import PopUser from "../Popups/PopUser/PopUser"
import * as S from "./Header.styled"
import * as Common from "../Shared/Common.styled"



function Header({ setTasks }) {
   const [isPopUserOpened, setIsPopUserOpened] = useState(false)

   function handleAddTask(event) {
      event.preventDefault()

      const date = new Date()

      setTasks((prev) => [
         ...prev,
         {
            id: date.getTime(),
            topic: "Research",
            title: "Новая задача",
            description: "Что-то",
            date: date.toDateString(),
            status: "Без статуса",
         },
      ])
   }

   function handleOpenPopUser(event) {
      event.preventDefault()

      setIsPopUserOpened((prev) => !prev)
   }

   return (
      <S.Header>
         <Common.Container>
            <S.HeaderBlock>
               <div className="header__logo _show _light">
                  <a href="" target="_self">
                     <img src="images/logo.png" alt="logo" />
                  </a>
               </div>
               {/* <div className="header__logo _dark">
                  <a href="" target="_self">
                     <img src="images/logo_dark.png" alt="logo" />
                  </a>
               </div> */}
               <S.HeaderNav>
                  <S.HeaderButton onClick={handleAddTask} id="btnMainNew">
                     {/* <a href="#popNewCard">Создать новую задачу</a> */}
                     Создать новую задачу
                  </S.HeaderButton>
                  <a onClick={handleOpenPopUser} href="#" className="header__user _hover02">
                     Ivan Ivanov
                  </a>
                  {isPopUserOpened && <PopUser />}
               </S.HeaderNav>
            </S.HeaderBlock>
         </Common.Container>
      </S.Header>
   )
}

export default Header
