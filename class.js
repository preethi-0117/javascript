class Users{
  
    getName(){
      return "Preethi"
    }
  }
  
  let obj=new Users()
  
  let a=obj.getName()
  
  console.log(a)




  // class Users{
  
//   getName(){
//     return "Preethi"
//   }
  
//   getInfo(){
//     console.log("Hello") 
//   }
// }

// let obj=new Users()

// let a=obj.getName()

// console.log(a)

// obj.getInfo()





  class Users{
  
    constructor(){
      console.log("Hello") 
    }
    
   
  }
  
  let obj=new Users()


  // class Users{
  
//   constructor(name){
//     this.name=name
//     console.log(name) 
//   }
// getName(){
//   console.log(this.name)
// }
// }

// let obj=new Users("Preethi")

// obj.getName()


class Myname{
    constructor(name,fname){
      this.name=name
      this.fname=fname
  //     console.log(nam)
    }
    getFullname(){
     
      console.log(this.name + this.fname)
    }
    
    getName(){
     
      console.log(this.name)
    }
                 
  }
  
  
  let obj=new Myname("Preethi","JP")
  obj.getFullname()
  obj.getName()
  




  // class Myname {
//   constructor(name, fname) {
//     this.name = name
//     this.fname = fname
//     console.log(this)
//   }
//    getObject(){
   
//        console.log(this.name+this.fname)
//    }
// }
//  let obj=new Myname("Preethi","JP")




  class Myname {
    constructor(details) {
      this.name=details.name
      this.contact=details.contact
      this.education=details.education
      console.log(this)
    }
  
  }
   let obj=new Myname({name:"Preethi JP",
                       contact:8876756,
                       
                     education:[{
                       course_name:"SSLC",
                       ins_name:"SMRV",
                       percentage:90
                      },
                                {
                       course_name:"HSC",
                       ins_name:"SMRV",
                       percentage:82
                                
                                },
                                {
                        course_name:"Bcom",
                       ins_name:"GASC",
                       percentage:78
                                }]})






                                class Myname {
                                  constructor(details) {
                                    this.name=details.name
                                    this.contact=details.contact
                                    this.education=details.education
                                    console.log(this)
                                  }
                                  
                                  getFullname(){
                                    this.getName()
                                  }
                                  getName(){
                                    console.log(this.education)
                                  }
                                
                                }
                                 let obj=new Myname({name:"Preethi JP",
                                                     contact:8876756,
                                                     
                                                   education:[{
                                                     course_name:"SSLC",
                                                     ins_name:"SMRV",
                                                     percentage:90
                                                    },
                                                              {
                                                     course_name:"HSC",
                                                     ins_name:"SMRV",
                                                     percentage:82
                                                              
                                                              },
                                                              {
                                                      course_name:"Bcom",
                                                     ins_name:"GASC",
                                                     percentage:78
                                                              }]})
                                                     
                                
                                 obj.getFullname()






 
// class Users{
//   constructor(user){
//     this.user=user
//   }
//   getName(){
//     return this.user.fname
//   }
//   testFunc(){
//      return "HI"
//   }
//   getFullName(){
//     return this.getName() + " " + this.user.lname
//   }
// }


// class Messages extends Users{
//   constructor(obj){
//     super(obj)
    
//   }
//   getMessageLength(messages){
//     return messages.length
//   }
  
//   getData(){
//     return super.getFullName()
//   }
// }


// const myDetails={fname:"Preethi",lname:"JP"}

// let uerObj=new Users(myDetails)

// let msgObj=new Messages(myDetails)

// let getUserName=msgObj.getData()


// console.log(getUserName)




 
class Users{
  constructor(user){
    this.user=user
  }
  getName(){
    return this.user.fname
  }
  testFunc(){
     return "HI"
  }
  getFullName(){
    return this.getName() + " " + this.user.lname
  }
}


class Messages extends Users{
  constructor(obj){
    super(obj)
    
  }
  getMessageLength(messages){
    return messages.length
  }
  
  getData(){
    return super.getFullName()
  }
}


const myDetails={fname:"Preethi",lname:"JP"}

let uerObj=new Users(myDetails)

let msgObj=new Messages(myDetails)

let getUserName=msgObj.getName()


console.log(getUserName)