function submit(){

let a=document.getElementById("name");
let b=document.getElementById("mail");
let c=document.getElementById("pass");

if (b.value=="preethi65@gmail.com" && c.value=="abcd"){
   let object={};
   object.userid=a.value;
   object.usermail=b.value;
   object.userpass=c.value;
   let login=JSON.stringify(object)
   localStorage.setItem("datas",login)
   window.location="fb1.html"
}

else{
    alert("invalid")
}
}



function checkauth(){
    let user=localStorage.getItem("datas")
    let converted=JSON.parse(user)

    if (converted){
        let bye=document.getElementById("bye")
        bye.innerHTML="Welcome" + converted["userid"]
    }

    else{
        window.location="fb.html"
    }
 }


function deleteData(){
    localStorage.removeItem("datas")
    window.location="fb.html"
}