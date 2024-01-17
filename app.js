// este son las variables
let secretNumber = 6;
let numUser = prompt("Me indicas un numero  entre 1 y 10 porfavor");
console.log(numUser);
//este codigo realiza la confirmacion
if(numUser==secretNumber){
    alert(`numero correcto es ${secretNumber}`);
} else{
    alert('No acertaste');
}