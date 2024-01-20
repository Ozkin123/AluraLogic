// este son las variables
let secretNumber = 6;
let numUser=0;
let numbersOfTries=1;
let changerWord='vez';
while (numUser!=secretNumber) {
    numUser = prompt("Me indicas un numero  entre 1 y 10 porfavor");
    console.log(numUser);
    //este codigo realiza la confirmacion
    if (numUser == secretNumber) {
        alert(`numero correcto es ${secretNumber}, y lo hiciste en ${numbersOfTries} ${changerWord}`);
    } else {
        if (numUser > secretNumber) {
            alert('el numero es menor');
        } else {
            alert('el numero es mayor');
        }
        numbersOfTries+=1;
        changerWord=(numbersOfTries>1)?'veces':'vez'
        alert('No acertaste');
        if(numbersOfTries>3){
            alert('se te acabaron los intentos');
            break;
        }
    }
}