
try{
const resultado = converte(123);

console.log(resultado);

}
catch(error){

    if(error instanceof TypeError)
         console.error("TypeError: " + error.message)
    else

     console.error("Error: " + error)

}
finally {
    console.log("O try-catch capturou o erro!")
}


export function converte(conteudo: any): string{
    return conteudo.toUpperCase();
    
}