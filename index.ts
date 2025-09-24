enum Status{
    Pending =' در انتظار ',
    Inprogress =' درحال انجام',
    Done =' انجام شده'
}

let tasks :Array<{id:number , title:string , status:Status}> =[]

function addTask(title:string,status:Status):void{
const newTask = {id:tasks.length+1,title,status}
tasks.push(newTask)
console.log(`Task ${title} added`)
}


addTask('New TAsk1',Status.Pending)