//task1
function add(a){
    console.log(a+(a+1))
  }
  add(1)


  //task3
let object1={
    name:"preethi",
    place:"nagercoil"
  }
  let object2={
    name:"preethi",
    place:"nagercoil"
  }
  if(JSON.stringify(object1)===JSON.stringify(object2)){
    console.log("true")
  }
  else{
    console.log("false")
  }


//task5
  let value
  if(value==undefined){
    console.log(value)
  }
else{
  
  console.log(value)
}


//   let new_array=[1,2,3,4,5,6,7]
// let array1=[];
// let filterarray= new_array.filter((num)=>{
//                                    if(num%2==0){
//                                      return true;
//                                    }
//                                     else
//                                     {
//                                      array1.push(num)
//                                     }
//                                    })
// console.log(array1)





let my_details={
    name:"Preethi",
    place:"Vadasery",
    contact:839085778,
    personal_details:{fathername:"Prabhu",
                     mothername:"Radha",
                     gender:"female",
                     sibiling:{younger_brothername:"Achu",
                               elder_brothername:"Dhanush",
                               
                     },
  
  }
  }
  console.log(my_details.personal_details.sibiling.younger_brothername)



  var person_details={
    name:"preethu",
    place:"Nagercoil",
    gender:"female",
    contact:8309888778,
    age:22}
  for (var each in person_details){
  console.log(each+':'+person_details[each])
  }