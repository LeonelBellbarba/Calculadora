

const  getNumber = sign =>{
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;

    switch(sign){
        case "+":
            Sum(num1, num2);
        break;

        case "-":
            rest(num1, num2);
        break;

        case "x":
            multiplicate(num1, num2);
        break;

        case "/":
            divide(num1, num2);
        break;
    }
    
}

const Sum = (num1, num2) =>{
  
    let resultado = document.getElementById("resultado_id")    
    let total = parseInt(num1) + parseInt(num2);
    
    // este codigo es para que no cuente mas de 2 numeros luego del punto
    resultado.innerHTML = Number.parseFloat(total).toFixed(2)
    
}

const rest = (num1, num2) =>{
    
    let resultado = document.getElementById("resultado_id")    
    let total = parseInt(num1) - parseInt(num2);

    resultado.innerHTML = Number.parseFloat(total).toFixed(2)
}

const multiplicate = (num1, num2) =>{
    let resultado = document.getElementById("resultado_id")    
    let total = parseInt(num1) * parseInt(num2);

    resultado.innerHTML = Number.parseFloat(total).toFixed(2)
    
}

const divide = (num1, num2) =>{
    let resultado = document.getElementById("resultado_id")    
    let total = parseInt(num1) / parseInt(num2);    
    
    
    resultado.innerHTML = Number.parseFloat(total).toFixed(2)
}