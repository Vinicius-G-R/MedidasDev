
let iniciar = () => { 
const result = document.getElementById('box-result');
const button = document.getElementById('button');
const calc = () => { 
    let n = document.getElementById('num-metro').value;
    if (n === "" || n <= 0){
        result.innerText = '[ERRO] Digite um valor válido'
        result.style.color = '#BD2A2E';
    }
    else {
        Number(n)
        let cm = (n * 100)
        let km = (n / 100)
        result.style.color = '#182226';
        result.innerHTML = `Equivalência ${cm} cm - ${n} m - ${km} km.`
    }   
};

        button.addEventListener('click', calc);
};
document.addEventListener('DOMContentLoaded', iniciar);