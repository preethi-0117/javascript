//adding values in next index

// let array=[1,2,3,4,5]

// let number_add=array.map((arr,i)=>{
//   if(array[i+1]){
//     return arr+array[i+1]
//   }
//   else{
//         return arr
//   }
// })
                         
// console.log(number_add)


//center value in array(odd value)

// let array=[2,5,9,6,7]
// let array_length=array.length

// let center_number=parseInt(array_length/2)


 

// console.log(array[center_number])



//center values in array(even values)

// let array=[2,4,6,8,5,4]

// let array_length=array.length/2

// if(array.length%2==0){
  
//   console.log(array[array_length-1],array[array_length])
  
// }


//multiplying array in same length

// let a=[1,2,3,4,6]

// let b=[8,2,1,4,3]

// let multiply=a.map((first,i)=>{
//   return a[i]*b[i]
// })

// console.log(multiply)



//multiplying in two arrays and not same length

let a=[4,6,1,7,3]

let b=[5,8,1,2,4,9,3,7]

let newarray=b

if(a.length<b.length){
  newarray=a
}

let multiply=newarray.map((first,i)=>{
  return a[i]*b[i]
})

console.log(multiply)


