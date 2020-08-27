window.onload = function () {
  alert('Este site faz o cálculo do imc!');
};
var peso;
var altura;
var imc;
var imcFormat;

var abaixoPeso = document.getElementById('abaixoPeso');
var pesoNormal = document.getElementById('pesoNormal');
var sobrepeso = document.getElementById('sobrepeso');
var obesidade = document.getElementById('obesidade');
var obesidadeGrave = document.getElementById('obesidadeGrave');
var lblAbxPeso = document.getElementById('lblAbxPeso');
var lblPsoNormal = document.getElementById('lblPsoNormal');
var lblSbrPeso = document.getElementById('lblSbrPeso');
var lblObesidade = document.getElementById('lblObesidade');
var lblObsGrave = document.getElementById('lblObsGrave');

function calculaImc() {
  peso = parseFloat(document.frm.txtPeso.value.replace(',', '.'));
  altura = parseFloat(document.frm.txtAltura.value.replace(',', '.'));

  imc = document.getElementById('txtImc');
  imcFormat = peso / (altura * altura);
  imc.value = imcFormat.toFixed(2).replace('.', ',');

  if (imc.value.replace(',', '.') < 18.5) {
    abaixoPeso.removeAttribute('disabled');
    abaixoPeso.checked = true;
    lblAbxPeso.style.color = 'orange';
  } else if (
    imc.value.replace(',', '.') >= 18.5 &&
    imc.value.replace(',', '.') <= 24.9
  ) {
    pesoNormal.removeAttribute('disabled');
    pesoNormal.checked = true;
    lblPsoNormal.style.color = 'green';
  } else if (
    imc.value.replace(',', '.') > 24.9 &&
    imc.value.replace(',', '.') <= 29.9
  ) {
    sobrepeso.removeAttribute('disabled');
    sobrepeso.checked = true;
    lblSbrPeso.style.color = 'orange';
  } else if (
    imc.value.replace(',', '.') > 29.9 &&
    imc.value.replace(',', '.') <= 39.9
  ) {
    obesidade.removeAttribute('disabled');
    obesidade.checked = true;
    lblObesidade.style.color = 'red';
  } else if (imc.value.replace(',', '.') > 39.9) {
    obesidadeGrave.removeAttribute('disabled');
    obesidadeGrave.checked = true;
    lblObsGrave.style.color = 'red';
  }
}

function limpar() {
  imc.value = '';
  document.frm.txtPeso.value = '';
  document.frm.txtAltura.value = '';

  abaixoPeso.checked = false;
  abaixoPeso.setAttribute('disabled', '');
  lblAbxPeso.style.color = 'black';

  pesoNormal.checked = false;
  pesoNormal.setAttribute('disabled', '');
  lblPsoNormal.style.color = 'black';

  sobrepeso.checked = false;
  sobrepeso.setAttribute('disabled', '');
  lblSbrPeso.style.color = 'black';

  obesidade.checked = false;
  obesidade.setAttribute('disabled', '');
  lblObesidade.style.color = 'black';

  obesidadeGrave.checked = false;
  obesidadeGrave.setAttribute('disabled', '');
  lblObsGrave.style.color = 'black';
}
