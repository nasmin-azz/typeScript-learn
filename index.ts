// function showFirst(arr:string[]) : string
// function showFirst(arr:number[]):number
// function showFirst(arr:any[]):any{
//   return arr[0]
// }

function showFirst<T>(arr:T[]) : T{
  return (arr[0])

}

console.log(showFirst(['Amin','Nima','Sima']))
console.log(showFirst([200,500,8000]))
