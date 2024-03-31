function percentage(){
    let Physics=Number(document.getElementById("physicsmark").value);
    let Chemistry=Number(document.getElementById("chemistrymark").value);
    let Biology=Number(document.getElementById("biologymark").value);
    let CS=Number(document.getElementById("csmark").value);
    let Maths=Number(document.getElementById("mathsmark").value);
    let total=Physics+Chemistry+Biology+CS+Maths;
    let percent=total/5;
     if (percent>=90){
          console.log("Grade A");
     }
     else if (percent>=80){
          console.log("Grade B");
     }
     else if(percent>=70){
          console.log("Grade C");
     }
     else if (percent>=60){
          console.log("Grade D");
     }
     else if (percent>=40){
          console.log("Grade E");
     }
     else if (percent<40){
          console.log("Grade F");
     }
         
     }