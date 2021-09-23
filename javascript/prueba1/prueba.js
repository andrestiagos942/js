//javascript breoh

var valor = 0;

while (valor < 4) {
  // codigo que se ejecuta de forma repetitiva hasta que ya no se cumpla la condicion
  console.log("Valor es = " + valor);
  console.log("valor es menor que 4, entonces le sumo 1 a la variable valor");

  if (valor == 2) {
    console.log("es igual a 2 y quiero para la ejecucion");
    break;
  }
  valor = valor + 1;
}
