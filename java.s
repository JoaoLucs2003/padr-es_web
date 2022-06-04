let nota1 = parseFloat(prompt("Digite a PRIMEIRA nota:"));
let nota2 = parseFloat(prompt("Digite a SEGUNDA nota:"));
let media = (nota1+nota2)/2;

if(media >=6){
    document.getElementById("cab").innerHTML= 'Sua Média:';
    document.getElementById('media').innerHTML= media;
    document.getElementById("text").innerHTML= 'Aprovado';
    document.getElementById('text').style.color= 'blue';
} else{
    document.getElementById("cab").innerHTML= 'Sua Média:';
    document.getElementById('media').innerHTML= media;
    document.getElementById("text").innerHTML= 'Reprovado';
    document.getElementById('text').style.color= 'red';
}

