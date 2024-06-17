import Statuses from "../../data/statuses"
import Column from "../Column/Column"


function Main({ tasks }) {
   return (
      <main className="main">
         <div className="container">
            <div className="main__block">
               <div className="main__content">
                  {Statuses.map((status, index) => {
                     const filteredTasks = tasks.filter((task) => task.status === status)

                     return <Column key={index} title={status} tasks={filteredTasks} />
                  })}
                  {/* <Column title={"Без статуса"} />
                  <Column title={"Нужно сделать"} />
                  <Column title={"В работе"} />
                  <Column title={"Тестирование"} />
                  <Column title={"Готово"} /> */}
               </div>
            </div>
         </div>
      </main>
   )
}

export default Main
