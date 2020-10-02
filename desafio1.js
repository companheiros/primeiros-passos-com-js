//Calculo de IMC 
 
const nome  = 'Carlos'
const peso = 80
const altura = 1.88

const imc = peso / (altura * altura)

var message = ""

if (imc >= 30){
    message = `${nome} Você esta acima do peso`
}else{
    message = `${nome } Você esta abaixo do peso`
}

console.log(message) 