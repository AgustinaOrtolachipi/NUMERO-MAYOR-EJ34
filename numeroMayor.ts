import * as rls from "readline-sync";

let Nro: number = rls.questionInt ("Ingrese un numero: ");
let I = 0 ;

while(Nro!=0){

    if (I <= Nro) I = Nro;

 Nro = rls.questionInt ("Ingrese un numero: "); 

}
console.log ("El numero mayor es: " + I) ; 