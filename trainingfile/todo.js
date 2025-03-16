var Status;
(function (Status) {
    Status["pending"] = "pending";
    Status["inprogress"] = "inprogres";
    Status["done"] = "done";
})(Status || (Status = {}));
var todos = [];
function addtodo(title, Status) {
    var newobj = { id: todos.length + 1, title: title, Status: Status };
    todos.push(newobj);
    console.log(todos);
}
function edittodo(id, newStatus) {
    // Find the task by id
    var task = todos.find(function (item) { return item.id === id; });
    // Status checker
    if (task) {
        task.Status = newStatus;
        console.log("status updated");
    }
    else {
        console.log("not found");
    }
}
addtodo("gym", Status.done);
edittodo(0, Status.pending);
