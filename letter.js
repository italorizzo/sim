var frases =[
    "Você é minha luz no fim do túnel",
    "Seu sorriso ilumina meu dia",
    "Você é a razão da minha felicidade",
    "Eu te amo mais do que as palavras podem expressar",
    "Você é a música em minha vida",
    "Você é a estrela mais brilhante no meu céu",
    "Você é o sonho que se tornou realidade",
    "Você é a melhor parte do meu dia",
    "Você é a única que eu quero",
    "Você é a dona do meu coração",
    "Você é a minha inspiração",
    "Você é a minha paz",
    "Você é a minha alegria",
    "Você é a minha força",
    "Você é a minha esperança",
    "Você é a minha motivação",
    "Você é a minha paixão",
    "Você é a minha vida",
    "Você é a minha alma gêmea",
    "Você é a minha melhor amiga",
    "Você é a minha confidente",
    "Você é a minha companheira",
    "Você é a minha parceira de vida",
    "Você é a minha rainha",
    "Você é a minha princesa",
    "Você é a minha musa",
    "Você é a minha sinfonia",
    "Você é a minha obra de arte",
    "Você é a minha perfeição",
    "Você é a minha preciosidade",
    "Você é a minha riqueza",
    "Você é a minha sorte",
    "Você é a minha benção",
    "Você é a minha graça",
    "Você é a minha bondade",
    "Você é a minha ternura",
    "Você é a minha doçura",
    "Você é a minha delicadeza",
    "Você é a minha gentileza",
    "Você é a minha generosidade",
    "Você é a minha humildade",
    "Você é a minha simplicidade",
    "Você é a minha honestidade",
    "Você é a minha lealdade",
    "Você é a minha fidelidade",
    "Você é a minha verdade",
    "Você é a minha realidade",
    "Você é PERFEITA, te amuuu muitooo"
];

var i = 0;
var j = 0;
var fraseAtual = '';

function escreverLetraPorLetra() {
    if (i < frases.length) {
        if (j < frases[i].length) {
            fraseAtual += frases[i][j];
            document.getElementById("texto").innerHTML = fraseAtual;
            j++;
        } else {
            i++;
            j = 0;
            fraseAtual = '';
        }
    } else {
        i = 0;
    }
}

setTimeout(function() {
    setInterval(escreverLetraPorLetra, 150);
}, 7000);
