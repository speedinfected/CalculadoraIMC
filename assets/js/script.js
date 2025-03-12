// Seleção dos elementos
const radios = document.querySelectorAll('input[name="genero"]');
const textoSelecionado = document.getElementById("selecionado");
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const btnCalcular = document.querySelector(".btn");

// Função para atualizar o texto do gênero selecionado
radios.forEach(radio => {
    radio.addEventListener("change", () => {
        textoSelecionado.textContent = `Este texto diz que você é ${radio.id}!`;
    });
});

// Função para formatar a altura ex: 1.80 <1 metro e oitenta
alturaInput.addEventListener("input", function () {
    let valor = alturaInput.value.replace(/[^0-9]/g, "");
    if (valor.length > 3) {
        valor = valor.slice(0, 3);
    }
    if (valor.length > 1) {
        valor = valor.slice(0, 1) + "." + valor.slice(1, 3);
    }

    alturaInput.value = valor;
});

// Função para validar o peso (apenas números)
pesoInput.addEventListener("input", function () {
    let valor = pesoInput.value.replace(/[^0-9]/g, "");

    if (valor.length > 3) {
        valor = valor.slice(0, 3);
    }

    pesoInput.value = valor;
});

// Função para calcular o IMC
btnCalcular.addEventListener("click", function (event) {
    event.preventDefault();
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        console.log("Por favor, insira valores válidos para altura e peso.");
        return;
    }
    const imc = (peso / (altura * altura)).toFixed(2);
    console.log(`Seu IMC é: ${imc}`);
});