function getdata(){
    console.log("works")
    let email=document.getElementById("email-address").value;
    let password=document.getElementById("pass").value;
    console.log(email);
    console.log(password);
}

function add(){
    let num_1=Number(document.getElementById("number1").value);
    let num_2=Number(document.getElementById("number2").value);
    console.log(num_1+num_2);
}

function greater(){
    let no_1=Number(document.getElementById("firstvalue").value);
    let no_2=Number(document.getElementById("secondvalue").value);
    if (no_1>no_2){
        console.log("no_1 is higher than no_2");
    }
    else if(no_2>no_1){
        console.log("no_2 is higher than no_1");
    }
    else if(no_1==no_2){
        console.log("no_1 and no_2 are equal");
    }
    else{
        console.log("Invalid");
    }
}

function oddeven(){
    let a=Number(document.getElementById("value").value);
    if (a%2==0){
        console.log(a,"is even number")
    }
    else{
        console.log(a,"is odd number")
    }
}

