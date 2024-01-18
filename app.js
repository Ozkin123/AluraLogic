// este son las variables
let secretNumber = 6;
let numUser=0;
while (numUser!=secretNumber) {
    numUser = prompt("Me indicas un numero  entre 1 y 10 porfavor");
    console.log(numUser);
    //este codigo realiza la confirmacion
    if (numUser == secretNumber) {
        alert(`numero correcto es ${secretNumber}`);
    } else {
        if (numUser > secretNumber) {
            alert('el numero es menor');
        } else {
            alert('el numero es mayor');
        }
        alert('No acertaste');
    }
}