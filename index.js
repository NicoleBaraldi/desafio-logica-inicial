let nome = "Nikk"
let quantidadeDeExperiência = 5010
let nivel = ""

switch (true) {
    case quantidadeDeExperiência < 1000:
        nivel = "Ferro"
        break;

    case quantidadeDeExperiência <= 2000:
        nivel = "Bronze"
        break;

    case quantidadeDeExperiência <= 5000:
        nivel = "Prata"
        break;

    case quantidadeDeExperiência <= 7000:
        nivel = "Ouro"
        break;

    case quantidadeDeExperiência <= 8000:
        nivel = "Platina"
        break;

    case quantidadeDeExperiência <= 9000:
        nivel = "Ascendente"
        break;

    case quantidadeDeExperiência <= 10000:
        nivel = "Imortal"
        break;

    default:
        nivel = "Radiante"
}
console.log("O Herói de Nome: " + nome + " está no nível de: " + nivel)