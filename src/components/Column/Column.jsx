import Card from "../Card/Card"


function Column({ title, tasks }) {
   return (
      <div className="main__column">
         <div className="column__title">
            <p>{title}</p>
         </div>
         <div className="cards">
            {tasks.map((task) => {
               return <Card key={task.id} topic={task.topic} title={task.title} date={task.date}/>
            })}
         </div>
      </div>
   )
}

export default Column
