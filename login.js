function checkData(){
    let a=document.getElementById("name");
    let b=document.getElementById("mail");
    let c=document.getElementById("pass");
   
    if (b.value==="preethi65@gmail.com" && c.value==="abcd"){
    let object={};
     object.userid=a.value
     object.usermail=b.value
     object.user_password=c.value
     let login=JSON.stringify(object)

     localStorage.setItem("datas",login);
    
     
      window.location="index.html"
     
    
        }
        else {
         alert("invalid")
        }
   }


      
  function checkauth(){
      let userinfo=localStorage.getItem("datas");
      let converted=JSON.parse(userinfo)
     
if (converted){
   let bye=document.getElementById("bye");
   bye.innerHTML="Welcome" + converted["userid"]
}
else{
   window.location="login.html"
} 
  }

  function deleteData(){
   localStorage.removeItem("datas")
   window.location="login.html"
  }

  
    
 