const inp1 = document.querySelector('.input1');
const inp2 = document.querySelector('.input2');
const btnSomar = document.querySelector('.somar');
const btnSubtrair = document.querySelector('.subtrair');
const btnMultiplicar = document.querySelector('.multiplicar');
const btnDividir = document.querySelector('.dividir');
const resultado = document.querySelector('p');

btnSomar.addEventListener('click', (n1, n2) => {
    let resul = parseInt(inp1.value) + parseInt(inp2.value);
    resultado.innerText = resul;
    inp1.value = '';
    inp2.value = '';
})

btnSubtrair.addEventListener('click', (n1, n2) => {
    let resul = parseInt(inp1.value) - parseInt(inp2.value);
    resultado.innerText = resul;
    inp1.value = '';
    inp2.value = '';
})

btnMultiplicar.addEventListener('click', (n1, n2) => {
    let resul = parseInt(inp1.value) * parseInt(inp2.value);
    resultado.innerText = resul;
    inp1.value = '';
    inp2.value = '';
})

btnDividir.addEventListener('click', (n1, n2) => {
    let resul = parseInt(inp1.value) / parseInt(inp2.value);
    resultado.innerText = resul;
    inp1.value = '';
    inp2.value = '';
})