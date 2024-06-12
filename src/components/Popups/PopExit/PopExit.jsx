import Button from "../../Shared/Button/Button"

function PopExit() {
   return (
      <div className="pop-exit" id="popExit">
         <div className="pop-exit__container">
            <div className="pop-exit__block">
               <div className="pop-exit__ttl">
                  <h2>Выйти из аккаунта?</h2>
               </div>
               <form className="pop-exit__form" id="formExit" action="#">
                  <div className="pop-exit__form-group">
                     <Button isDefault={true} id="exitYes">
                        <a href="modal/signin.html">Да, выйти</a>
                     </Button>
                     <Button isDefault={false} id="exitNo">
                        <a href="main.html">Нет, остаться</a>
                     </Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default PopExit
