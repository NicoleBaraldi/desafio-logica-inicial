function saldoVitorias(vitorias, derrotas){
    let saldoDeRankeadas = vitorias - derrotas;
    let nivel;
switch (saldoDeRankeadas) {
  case "<10":
    nivel = "Ferro";
    break;
  case "<=20":
    nivel = "Bronze";
    break;
  case "<=50":
    nivel = "Prata";
    break;
  case "<=80":
    nivel = "Ouro";
    break;
  case "<=90":
    nivel = "Diamante";
    break;
  case "<=100":
    nivel = "Lendário";
    break;
  default:
    nivel = "Imortal";
}

 }

console.log("O Herói tem saldo de:" + saldoDeRankeadas + " está no nível de: " + nivel)  

 