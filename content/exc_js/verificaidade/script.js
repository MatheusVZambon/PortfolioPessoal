function verificar(){
    let nome = document.getElementById('txt_nome').value
    let ano_nasc = document.getElementById('nmb_ano').value
    let sexo = document.querySelector('input[name="rd_sexo"]:checked').value;
    let ano_atual = new Date().getFullYear()
    let idade = ano_atual - ano_nasc

    if (ano_nasc.length == 0 || ano_nasc > ano_atual){
        window.alert('Dados Inconsistentes. Por favor, revise-os.')
    }
    else{
        let retrato = document.createElement('img')
        retrato.setAttribute('id','img_retrato')

        switch (sexo){
            case 'homem':
                if (idade >= 0 && idade < 11){
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menino1.jpg')    
                    document.getElementById('p_result').appendChild(retrato)
                }
                else if (idade >= 11 && idade < 19){
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menino2.jpg')    
                    document.getElementById('p_result').appendChild(retrato)
                }
                else if (idade  >= 19 && idade < 60){
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menino3.jpg')    
                    document.getElementById('p_result').appendChild(retrato)    
                }
                else{
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menino4.jpg')    
                    document.getElementById('p_result').appendChild(retrato)    
                }
                break
            case 'mulher':
                if (idade >= 0 && idade < 11){
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menina1.jpg')    
                    document.getElementById('p_result').appendChild(retrato)    
                }
                else if (idade >= 11 && idade < 19){
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menina2.jpg')    
                    document.getElementById('p_result').appendChild(retrato)    
                }
                else if (idade  >= 19 && idade < 60){
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menina3.jpg')    
                    document.getElementById('p_result').appendChild(retrato)    
                }
                else{
                    document.getElementById('p_result').innerHTML = `${nome} tem ${idade} anos e é ${sexo} <br>`
                    retrato.setAttribute('src', 'media/menina4.jpg')    
                    document.getElementById('p_result').appendChild(retrato)    
                }
                break
        }     
    }
}
function limpar(){
    document.getElementById('txt_nome').value = ''
    document.getElementById('nmb_ano').value = ''
    document.getElementById('p_result').innerHTML = ''
}