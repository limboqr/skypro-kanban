import * as S from "./Main.styled"
import * as Common from "../Shared/Common.styled"
import Statuses from "../../data/statuses"
import Column from "../Column/Column"


function Main({ tasks }) {
   return (
      <S.Main>
         <Common.Container>
            <S.MainBlock>
               <S.MainContent>
                  {Statuses.map((status, index) => {
                     const filteredTasks = tasks.filter((task) => task.status === status)

                     return <Column key={index} title={status} tasks={filteredTasks} />
                  })}
                  {/* <Column title={"Без статуса"} />
                  <Column title={"Нужно сделать"} />
                  <Column title={"В работе"} />
                  <Column title={"Тестирование"} />
                  <Column title={"Готово"} /> */}
               </S.MainContent>
            </S.MainBlock>
         </Common.Container>
      </S.Main>
   )
}

export default Main
