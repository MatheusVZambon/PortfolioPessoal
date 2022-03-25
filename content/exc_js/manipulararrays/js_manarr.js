let arr_valor = []

function adicionar(){
    let valor_adc = Number(document.getElementById('nmb_lista').value)
    if(valor_adc > 100 || valor_adc < 1 || document.getElementById('nmb_lista').value.length == 0){
        window.alert('Erro #01 - O valor inserido deve ser entre 1 e 100')
    }
    else{
        let valores = document.getElementById('slc_valores')

        if(arr_valor.includes(valor_adc) == true){
            window.alert('Erro #02 - O valor só pode ser inserido uma vez')
        }
        else{
            let valor = document.createElement('option')
            valor.innerText = `Número ${valor_adc} foi adicionado`
            valores.appendChild(valor)
            arr_valor.push(valor_adc)
        }
        document.getElementById('nmb_lista').value = ''
        document.getElementById('nmb_lista').focus()
    }
}


function finalizar(){
    let array_deValores = arr_valor
    let menor_av = array_deValores.sort(function(na,nb){return na-nb})[0]
    let maior_av = array_deValores.sort(function(na,nb){return na-nb})[array_deValores.length - 1]

    let elementos_av = 0
    let soma_av = 0
    let media_av = 0

    for(let vlrs in array_deValores){
        soma_av += array_deValores[vlrs]
        elementos_av += 1
    }
    media_av = soma_av / elementos_av 

    document.getElementById('p_resultado').innerText = `Maior valor: ${maior_av}; Menor valor: ${menor_av}; Elementos: ${elementos_av}; Soma: ${soma_av}; Média: ${media_av.toFixed(2)}`
}

function limpar(){
    document.getElementById('slc_valores').innerText = ''
    document.getElementById('p_resultado').innerText = ''
}