//Calculo de aposentadoria 
const nome = "fabio"
const sexo = "M"
const idade = 72
const contribuicao = 23

const soma = idade + contribuicao

if (sexo == "M"){
    
    if (soma >= 95){
      console.log(`${nome} voce pode se aposentar`)
    }else{
      console.log(`${nome} Voce nao pode se aposentar`)  
    }
}else{
   
    if (soma >= 85){
        console.log(`${nome} voce pode se aposentar`)
    }else{
        console.log(`${nome} voce nao pode se aposentar`)
    }
}