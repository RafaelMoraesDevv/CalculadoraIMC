const resultado = document.getElementById('resultado');

function imc() {
  const txtNome = document.getElementById('txtNome').value;
  const txtAltura = document.getElementById('txtAltura').value;
  const txtPeso= document.getElementById('txtPeso').value;
  const Calcular = document.getElementById('Calcular');

  if(txtNome.value !== '' && txtAltura !== '' && txtPeso !== '') {
    const valorIMC = (txtPeso / (txtAltura * txtAltura)).toFixed(2);

    let classificacao = '';

    if (valorIMC < 18.5) {
      classificacao = 'abaixo do peso';
    } else if (valorIMC >= 18.5 && valorIMC <= 24.9) {
      classificacao = 'com peso ideal. PARABÉNS!!!';
    } else if (valorIMC >= 25 && valorIMC <= 29.9) {
      classificacao = 'levemente acima do peso';
    } else if (valorIMC >= 30 && valorIMC <= 34.9) {
      classificacao = 'com obesidade grau I';
    } else if (valorIMC >= 35 && valorIMC <= 39.9) {
      classificacao = 'com obesidade grau II';
    } else {
      classificacao = 'com obesidade grau III';
    }

    resultado.textContent = `${txtNome} seu IMC é ${valorIMC} e você esta ${classificacao}`;
  }else{
    resultado.textContent = 'Preencha todos os campos...';
  }
}

Calcular.addEventListener('click', imc);
