function alerta(){

var senha;


senha = String(document.getElementById('senha').value);


//ADICIONANDO MENSAGEM DE SENHA FRACA, MEDIA, E BOA
    if (senha.length < 6 && senha.length >=0){
        nivsenha = 'fraca'
    }else if (senha.length >= 6 && senha.length <=10){
        nivsenha = 'Media'
    }else {
        nivsenha = 'Boa'
    }

    if (nivsenha == 'fraca')
    {
        document.getElementById('alerta').innerHTML = 'Senha Fraca!!';
        document.getElementById('alerta').style.color = 'red';
        document.getElementById('alerta').style.fontWeight = 700; 
    }else if (nivsenha =='Media'){
        document.getElementById('alerta').innerHTML = 'Senha Media!';
        document.getElementById('alerta').style.color = 'yellow';
        document.getElementById('alerta').style.fontWeight = 700; 
    }else if (nivsenha =='Boa'){
        document.getElementById('alerta').innerHTML = 'Senha Forte!!';
        document.getElementById('alerta').style.color = '#10ed00';
        document.getElementById('alerta').style.fontWeight = 700; 

    }

    
}
function confirmasenha(){

    var senha;
    var csenha;
    
    senha = String(document.getElementById('senha').value);
    csenha = String(document.getElementById('csenha').value);

    if (senha != csenha){
        document.getElementById('alerta2').innerHTML = 'As senhas precisam ser iguais!!!';
        document.getElementById('alerta2').style.fontWeight = 700;
        document.getElementById('alerta2').style.color = 'white'
    } else if (senha == csenha){
        document.getElementById('alerta2').style.display = ' none'
    }

    
}
function cadastrar(){
   
    var senha;
    var csenha;
    var nivsenha;

    senha = String(document.getElementById('senha').value);
    csenha = String(document.getElementById('csenha').value);

    if (senha.length < 6 && senha.length >=0){
        nivsenha = 'fraca'
    }else if (senha.length >= 6 && senha.length <=10){
        nivsenha = 'Media'
    }else {
        nivsenha = 'Boa'
    }
    
    if (senha != csenha || nivsenha == 'fraca'){
        document.getElementById('senha').style.borderColor = 'red'
        document.getElementById('senha').style.backgroundColor = '#ff6666'
        window.alert('SENHAS INVALIDAS, VERIFIQUE AS SENHAS E TENTE NOVAMENTE')
        document.getElementById('csenha').style.borderColor = 'red'
        document.getElementById('csenha').style.backgroundColor = '#ff6666'
    }else{
        document.getElementById('cadastra').addEventListener('submit' , cadastro())
        function cadastro(){
            document.querySelector('.CONCLUIDO').style.display = 'block'
            document.querySelector('.formulario').style.display = 'none'
           
        }
    }
}