function cutoff(){
    let Tamil=Number(document.getElementById("tamilmark").value);
    let English=Number(document.getElementById("englishmark").value);
    let a=(Tamil+English)/2;
    let d=a/4;
    let Maths=Number(document.getElementById("mathsmark").value);
    let b=Maths/2;
    let CS=Number(document.getElementById("csmark").value);
    let Physics=Number(document.getElementById("physicsmark").value);
    let Chemistry=Number(document.getElementById("chemistrymark").value);
    let c=(CS+Physics+Chemistry)/3;
    let e=c/4;
    let z=d+b+e;
    console.log(z);
}