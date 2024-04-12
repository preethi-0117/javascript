let names="preethi"
let email="preethi@gmail.com"
let phone=8087766

let resume={                  //names:names,
            names,            //email:email,
            email,            //phone:phone    (object property shorthand method)
            phone
}
console.log(resume)



let names="preethi"
let email="preethi@gmail.com"
let phone=8087766

let resume={
            [names]
            [email]
            [phone]
}
console.log(resume)



let resume={
    names:"preethi",
  
    message:function(){
    return this.names
  }
  
  }
    console.log(resume.message())
    console.log(resume.names,resume.message())
  console.log(resume)


hello = () => {           //function()  ()=>
  return "Hello World!";
}
console.log(hello())


hello = function() {
  return "Hello World!";
}





// //array destructuring
let a=["Sun","Mon","Tue"]

let [first,second]=a
console.log(first)
console.log(second)
console.log(third)


// //object destructuring
let b={names:"preethi",
       age:22,
      place:"vadasery"
      }

// //only use same keys
let {name,age,place}=b

console.log(names)
console.log(age)
console.log(place)




const add=(a,b)=>{
    console.log(a+b)
  }
  
  add(5,6)
  
  const add=(a,b)=>{
    return a+b
  }
  
  let a=add(5,6)
  console.log(a)
  
  