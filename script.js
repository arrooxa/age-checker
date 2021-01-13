function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var txtano = window.document.getElementById('txtano');
    var n = Number(txtano.value);
    var res = window.document.getElementById('res');

    if(txtano.value.length == 0 || txtano.value > ano){
        window.alert('Verifique os dados preenchidos!')
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - n;
        var genero = '';
        var img = document.createElement('img');

        if(fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-m.png');
            }else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-m.png');
            }else if(idade < 50){
                img.setAttribute('src',  'foto-adulto-m.png');
            }else{
                img.setAttribute('src', 'foto-idoso-m.png');
            }
        }else{
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'foto-bebe-f.png');
            }else if (idade < 21){
                img.setAttribute('src', 'foto-jovem-f.png');
            }else if(idade < 50){
                img.setAttribute('src',  'foto-adulto-f.png');
            }else{
                img.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        res.innerHTML = `<p>Você é ${genero} com ${idade} anos.</p>`
        res.appendChild(img);
    }
}