//map function using name and lastname

let students=[{
    name:"Pavithra",
    place:"ngl",
    lname:"S"},
                
                {
    name:"Preethi",
    place:"vadasery",
    lname:"JP"},
                
                {
    name:"Anu",
    place:"kk",
    lname:"K"},
                
  ]
  
  let student_name_lname=students.map((stu)=>stu.name + ' ' + stu.lname)
  
  console.log(student_name_lname)
  
  
  //name length
  
  let students=["Pavithra","Preethi","Amirtha","varshni"]
   
  let student_name_length=students.map((stu)=>stu.length)
  
  console.log(student_name_length)
  
  
  //filter function
  
  let students=[{
    name:"Pavithra",
    place:"ngl",
    lname:"S"
     },
               
                {
    name:"Preethi",
    place:"vadasery",
    lname:"JP"
    },
               
                {
    name:"Anu",
    place:"kk",
    lname:"K"
    },
               
  ]
  
  let filterStudents=students.filter((stu)=>{
   if(stu.name!="Anu"){
     return true
   }
  })
  console.log(filterStudents)
  
  
  //two parameters are used in map and filter functions(i is index default parameter)
  
  // let students=[
  //   {
  //   name:"Pavithra",
  //   place:"ngl",
  //   lname:"S"},
                
  //               {
  //   name:"Preethi",
  //   place:"vadasery",
  //   lname:"JP"},
                
  //               {
  //   name:"Anu",
  //   place:"kk",
  //   lname:"K"
  // },
                
  // ]
  
  // let students_index=students.map((stu,i)=>i)
  
  // console.log(students_index)
  