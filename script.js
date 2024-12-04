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
        randomword = "piedra";    
    break;

    case 2:
        randomword ="papel";    
    break;

    case 3: 
        randomword = "tijera";    
    break;
}

console.log( randomword);

//FUNCION QUE GUARDA LA ELECCION DEL JUGADOR
let answerHuman;
getHumanChoice = () =>{ 
     answerHuman = prompt("¿Piedra, Papel o Tijeras?");
     return answerHuman.toLowerCase();  //HACEMOS QUE LA OPCION HUMANA NO DISTINGA ENTRE
                                        //MAYUSCULAS O MINUSCULAS
}
console.log(getHumanChoice());



let ComputerScore = 0;
let HumanScore = 0;



PlayRound = (humanchoice, computerchoice) =>{ 

}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//PlayRound(humanSelection, computerSelection);