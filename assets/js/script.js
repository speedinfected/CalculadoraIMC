// Seleção dos elementos

const radios = document.querySelectorAll('input[name="genero"]');
const alturaInput = document.getElementById("altura");
const pesoInput = document.getElementById("peso");
const btnCalcular = document.querySelector(".btn");

// Variável para armazenar o gênero selecionado
let generoSelecionado = "homem"; 

// Atualiza o gênero selecionado
radios.forEach(radio => {
    radio.addEventListener("change", () => {
        generoSelecionado = radio.id; 
    });
});

// Função para formatar a altura (ex: 1.80)
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

// Seleção dos elementos do container3
const container3 = document.querySelector(".container3");
const valorIMC = container3.querySelector(".valor");
const nivelIMC = container3.querySelector(".nivel");
const descricaoIMC = container3.querySelector(".descricao");

// Função para calcular o IMC e atualizar o container3
btnCalcular.addEventListener("click", function (event) {
    event.preventDefault();
    const altura = parseFloat(alturaInput.value);
    const peso = parseFloat(pesoInput.value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    const mensagem = calcularNivelIMC(imc, generoSelecionado);

    // Atualiza o container3 com os resultados
    valorIMC.textContent = imc;
    nivelIMC.textContent = mensagem.nivel;
    descricaoIMC.textContent = mensagem.descricao;

    // Exibe o container3 (caso esteja oculto)
    container3.style.display = "block";
    container3.classList.add("visible");
    setTimeout(() => {
        container4.classList.add("visible");
    }, 500);
});

// Função para determinar o nível do IMC e a mensagem correspondente
function calcularNivelIMC(imc, genero) {
    let nivel = "";
    let descricao = "";

    if (imc < 18.5) {
        nivel = "Abaixo do peso";
        descricao = "Procure um médico! Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.";
    } else if (imc >= 18.5 && imc < 24.9) {
        nivel = "Peso Normal";
        descricao = "Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.";
    } else if (imc >= 25 && imc < 29.9) {
        nivel = "Sobrepeso";
        descricao = "Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.";
    } else if (imc >= 30 && imc < 34.9) {
        nivel = "Obesidade grau I";
        descricao = "Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
    } else if (imc >= 35 && imc < 39.9) {
        nivel = "Obesidade grau II";
        descricao = "Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde. ";
    } else {
        nivel = "Obesidade grau III";
        descricao = "Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.";
    }

    return { nivel, descricao };
}



// Seleção dos elementos do container4
const container4 = document.querySelector(".container4");
const medidaRisco = container4.querySelector(".medida-risco");


// Função para atualizar a medida de risco com base no gênero
function atualizarMedidaRisco(genero) {
    if (genero === "homem") {
        medidaRisco.textContent = "Para homens: 94 cm ou mais.";
    } else if (genero === "mulher") {
        medidaRisco.textContent = "Para mulheres: 80 cm ou mais.";
    }    
}

// Atualiza a medida de risco quando o gênero é alterado
radios.forEach(radio => {
    radio.addEventListener("change", () => {
        generoSelecionado = radio.id; 
        atualizarMedidaRisco(generoSelecionado); 
    });
});

// Inicializa a medida de risco com o valor padrão (homem)
atualizarMedidaRisco(generoSelecionado);