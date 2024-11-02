
let interacaoUsuario = document.querySelector('input#calcular');
interacaoUsuario.addEventListener('click', calcular)


function calcularImc(){

    //Declara variáveis

    let valorPeso = Number(document.querySelector('input#peso').value);
    let valorAltura = Number(document.querySelector('input#altura').value);
    let valorImc = valorPeso / Math.pow(valorAltura,2);  //função matemática para calcular ao quadrado²

    //Exibe Resultado do IMC
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Valor IMC: ${valorImc.toFixed(2)}</p>`
    
    //Exibe descrição conforme resultado acima

    let descricaoResultado = document.getElementById('descricaoResultado');

    if (valorImc < 18.5) {
        descricaoResultado.innerHTML = '<p>Menor que 18,5 - Abaixo do peso</p>';
    } else if (valorImc >= 18.5 && valorImc <= 24.9) {
        descricaoResultado.innerHTML = '<p>18,5 - 24,9 - Peso normal</p>';
    } else if (valorImc >= 25 && valorImc <= 29.9) {
        descricaoResultado.innerHTML = '<p>25 - 29,9 - Sobrepeso</p>';
    } else if (valorImc >= 30 && valorImc <= 34.9) {
        descricaoResultado.innerHTML = '<p>30 - 34,9 - Obesidade Grau I</p>';
    } else if (valorImc >= 35 && valorImc <= 39.9) {
        descricaoResultado.innerHTML = '<p>35 - 39,9 - Obesidade Grau II (severa)</p>';
    } else {
        descricaoResultado.innerHTML = '<p>Maior ou igual a 40 - Obesidade Grau III (mórbida)</p>';
    }

}