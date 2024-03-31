function electricity(){
     let a=Number(document.getElementById("unit").value);
     if (a<=50){
      amount=50*0.50
      surcharge=(amount*20/100)
      charge=surcharge+amount
      console.log("amount to be paid:",charge)
}

     else if (a<=150){
      amount=25+(a-50)*0.75
      surcharge=(amount*20/100)
      charge=surcharge+amount
      console.log("amount to be paid:",charge)
}

    else if (a<=250){
      amount=100+(a-150)*1.20
      surcharge=(amount*20/100)
      charge=surcharge+amount
      console.log("amount to be paid:",charge)
 }

    else if (a<250){
      amount=220+(a-250)*1.50
      surcharge=(amount*20/100)
      charge=surcharge+amount
      console.log("amount to be paid:",charge)
}

}










