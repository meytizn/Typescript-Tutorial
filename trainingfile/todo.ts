enum Status{
  pending="pending",
  inprogress="inprogres",
  done="done",
}


let todos:Array<{id:number,title:string,Status:Status}>=[]




function addtodo(title:string,Status:Status):void{
  let newobj={id:todos.length+1 , title , Status }
  todos.push(newobj)
  console.log(todos)
}






function edittodo(id: number, newStatus: Status): void {
  // Find the task by id
  let task = todos.find((item) => item.id === id);
  // Status checker
  if (task) {
    task.Status = newStatus;
    console.log("status updated");
  } else {
    console.log("not found");
  }
}


addtodo("gym",Status.done)
edittodo(0,Status.pending)