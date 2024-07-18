import Card from "../Card/Card"
import * as S from "./Column.styled"


function Column({ title, tasks }) {
   return (
      <S.MainColumn>
         <S.ColumnTitle>
            <S.ColumnTitleP>
               {title}
            </S.ColumnTitleP>
         </S.ColumnTitle>
         <S.Cards>
            {tasks.map((task) => {
               return <Card key={task.id} topic={task.topic} title={task.title} date={task.date} />
            })}
         </S.Cards>
      </S.MainColumn>
   )
}

export default Column
