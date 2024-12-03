console.log("Estoy en Js")

let $resultado=document.getElementById("resul")

function fSumar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "LA SUMA ES: "+(num1+num2)
    //cosole.log(typeof(num1)) este codigo es para saber el tipo de dato
}
function fRestar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "LA RESTA ES: "+(num1-num2)
    //cosole.log(typeof(num1)) este codigo es para saber el tipo de dato
}
function fMultiplicar(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    $resultado.innerHTML = "LA MULTIPLICACION ES: "+(num1*num2)
    //cosole.log(typeof(num1)) este codigo es para saber el tipo de dato
}
function fDividir(){
    let num1 = parseInt(n1.value)
    let num2 = parseInt(n2.value)
    if(num2===0)
    {$resultado.innerHTML = "LA DIVISION ENTRE CERO(0)NO ES POSIBLE"}
    else{$resultado.innerHTML = "LA DIVISION ES: "+(num1/num2)}
    //cosole.log(typeof(num1)) este codigo es para saber el tipo de dato
}
