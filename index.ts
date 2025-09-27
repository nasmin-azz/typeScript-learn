namespace Products{
  interface Product{
   readonly id:number
    name:string
    price?:number
  }

  const products : Product[] =[
    {id:1,name:'LapTop1',price:10000000000000},
    {id:2,name:'LapTop2',price:20000000000000},
    {id:3,name:'LapTop3',price:30000000000000},
    {id:4,name:'LapTop4',price:40000000000000}

  ]

  function listProduct():string[]{
    return products.map(item =>`${item.name} - ${item.price}`)
  }
  console.log(listProduct())
}