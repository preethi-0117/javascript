function Gross_salary(){
    let a=Number(document.getElementById("salary").value);
    if (a<=10000){
         hra=a*0.20
         da=a*0.80
         gs=a+hra+da
         console.log(gs)
    }
    else if(a<=20000){
         hra=a*0.25
         da=a*0.90
         gs=a+hra+da
         console.log(gs)
    }
    else if (a>20000){
         hra=a*0.30
         da=a*0.95
         gs=a+hra+da
         console.log(gs)
    }
}