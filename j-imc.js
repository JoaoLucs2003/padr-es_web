let peso = parseFloat(prompt('Digite seu PESO:'));
let altura = parseFloat(prompt('Digite sua ALTURA:'));
let altura2 = altura / 100;
let imc = peso / (altura2 * altura2);

let situacao = '';

if (altura <= 0 || altura <= 0){
    situacao = 'altura ou peso não está válido!';
} else{
    if (imc < 20){
        situacao = 'Abaixo do peso';
    } else{
        if (imc >= 20 && imc < 25){
            situacao = 'normal';
        } else{
            if (imc >= 25 && imc < 30){
                situacao = 'sobrepeso';
            } else{
                if (imc >= 30 &&  imc < 35){
                    situacao = 'obesidade I';
                } else{
                    if (imc >= 35 &&  imc < 40){
                        situacao = 'obesidade II';
                    } else{
                        situacao = 'obesidade III';
                    }
                }
            }
        }
    }
}

document.getElementById('results').innerText = imc.toFixed(0);
document.getElementById('text').innerText = situacao;