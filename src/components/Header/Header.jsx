import { useState } from "react"
import PopUser from "../Popups/PopUser/PopUser"


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
      <header className="header">
         <div className="container">
            <div className="header__block">
               <div className="header__logo _show _light">
                  <a href="" target="_self">
                     <img src="images/logo.png" alt="logo" />
                  </a>
               </div>
               <div className="header__logo _dark">
                  <a href="" target="_self">
                     <img src="images/logo_dark.png" alt="logo" />
                  </a>
               </div>
               <nav className="header__nav">
                  <button className="header__btn-main-new _hover01" id="btnMainNew" onClick={handleAddTask}>
                     {/* <a href="#popNewCard">Создать новую задачу</a> */}
                     Создать новую задачу
                  </button>
                  <a onClick={handleOpenPopUser} href="#" className="header__user _hover02">Ivan Ivanov</a>
                  {isPopUserOpened && <PopUser />}
               </nav>
            </div>
         </div>
      </header>
   )
}

export default Header
