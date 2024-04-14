//task1

let company_details=[
    {company_name:"HCL",
     year:1992
},
{company_name:"TATA",
     year:1997
},
{company_name:"Accenture",
     year:1983
},
]

for (let each of company_details){
console.log(each.company_name)
}




//task2

let company_details=[
    {company_name:"HCL",
     start_year:1992
},
{company_name:"TATA",
     start_year:1997
},
{company_name:"Accenture",
     start_year:1983
},
]

for (let each of company_details){
if(each.start_year>1987){
console.log(each.company_name,each.start_year)
}
}


//task4
let company_details=[
    {
    company_name:"TCS",
    starting_year:1967,
    ending_year:1995
     },
      {
    company_name:"Infosis",
    starting_year:1978,
    ending_year:2018
     },
    {
    company_name:"C2C",
    starting_year:1998,
    ending_year:2014
     }
  
  ]
  
  let filterCompanies=company_details.sort((a,b)=>a.ending_year-b.ending_year)
  console.log(filterCompanies)



//task5
let student_details=[{
    name:"Pavithra",
    age:28,
    place:"Nagercoil"
    },
   {
    name:"Preethi",
    age:23,
    place:"Vadasery"
    },
   {
    name:"Rosy",
    age:26,
    place:"kk"
    },
]



let filterAges=student_details.sort((f,s)=>s.age-f.age)
console.log(filterAges)


//task6
let student_details=[{
    name:"Pavithra",
    age:28,
    place:"Nagercoil"
    },
   {
    name:"Preethi",
    age:23,
    place:"Vadasery"
    },
   {
    name:"Rosy",
    age:26,
    place:"kk"
    },
]

let reduceAges=student_details.reduce((c,d)=> c+d.age,0);

console.log(reduceAges)


//task8
function add(...args){
    total=0;
    for(let each of args){
      total+=each   //total=total+each
    }
    console.log(total)
  }
  
  add(2,4,5,6,7,8,9,10,11,12,13,14)



  //task11
let total=-1
function add(){
  total++
  console.log(total)
}
add()
add()


//task7
let  company_detail=
{
company_name:"TCS",
category:"retail"
}
let {company_name}=company_detail
console.log(company_name)


//task10
  
// let user_address={
//   name:"Preethi",
//   street:"CBH Street",
//   door_no:"100A",
//   city:"Nagercoil",
//   pincode:629001
// }
// var street={street}=user_address 
// console.log(street.street)

let user_address={
    name:"Preethi",
    street:"CBH Street",
    door_no:"100A",
    city:"Nagercoil",
    pincode:629001
  }
  var {street}=user_address 
  console.log(street)



  //task9
function data(...args){
    let new_args=[]
          for(let each of args){
            if(typeof(each)==="number"){
              new_args.push(each)
            }
            else if(typeof(each)==="string"){
              new_args.push(each)
            }
            else if(typeof(each)==="object"){
              new_args.push(...each)
            }
            
          }
          console.log(new_args)
    }
    console.log(data(1,3,"apple","orange",["papaya","grapes",9,10,"mango"]))
  



    
//task3                        doubttt
// let company_details=[
//   {
//   company_name:"Gopala Asan shop",
//   starting_year:1967,
//   ending_year:1995,
//   category:"Retail"
    
//    },
//     {
//   company_name:"subaraj store",
//   starting_year:1978,
//   ending_year:2018,
//   category:"wholesale shop"
//    },
//   {
//   company_name:"C2C",
//   starting_year:1998,
//   ending_year:2014,
//   category:"Retail"
//    }

// ]
// let renderHTML="";
// for(let each of company_details){
//   if(each.category=="Retail"){
//     renderHTML=renderHTML+<p>${each.company_name + " " + "from" + " " +  each.starting_year + " " + "to" + " " +  each.ending_year }</p>
//   }

// }
// document.getElementById("trs").innerHTML=renderHTML