//FUNCION QUE CREA NUMEROS ENTRE 1 Y 3
getComputerChoice = ( ) =>{ 
    return Math.floor( Math.random() *3 )+1;

};
//ESE NUMERO ALEATORIO LO ASIGNAMOS A UNA VARIABLE
let randomnumber = getComputerChoice();
let randomword;


//CON UN SWITCH "CONVERTIMOS" ESOS NUMEROS ALETORIOS EN CADENAS DE TEXTO
switch( randomnumber ){ 
    
    case 1:
        randomword = "Piedra";    
    break;

    case 2:
        randomword ="Papel";    
    break;

    case 3: 
        randomword = "Tijera";    
    break;
}

console.log( randomword);


let answerHuman;
getHumanChoice = () =>{ 
    return answerHuman = prompt("¿Piedra, Papel o Tijeras?");
}

console.log(getHumanChoice());
