let main="Agaram"

function storeData(){ 
      localStorage.setItem("details",main);
}

function getData(){
     let localData=localStorage.getItem("details");
     
     alert(localData)
}


let wel=[2,3,5]

function storeData(){ 
      localStorage.setItem("details",wel);
}

function getData(){
     let localData=localStorage.getItem("details");
     
     alert(localData)
}

let list=[2,3,5]

function storeData(){ 
    let convertedName= JSON.stringify(list)
      sessionStorage.setItem("test",convertedName);
}

function getData(){
     let data=sessionStorage.getItem("test");
     let arrayData=JSON.parse(data)
     console.log(arrayData)
    //  alert(data)
    alert(1)
}

let array=[2,3,5]

function storeData(){ 
    let convertedName= JSON.stringify(array)
      localStorage.setItem("details",convertedName);
}

function getData(){
     let data=localStorage.getItem("details");
     let arrayData=JSON.parse(data)
     console.log(arrayData)
    //  alert(localData)
}