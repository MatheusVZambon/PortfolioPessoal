function contar(){
    let ini = document.getElementById('nmb_inicio')
    let fim = document.getElementById('nmb_fim')
    let seq = document.getElementById('nmb_sequencia')
    let res = document.getElementById('p_resultado')

    res.innerHTML = ``

    if(ini.value.length == 0 || fim.value.length == 0 || seq.value.length == 0){
        window.alert('Erro #01 : Algum dado está vazio.')
    } 
    else {
        nmbIni = Number(ini.value)
        nmbFim = Number(fim.value)
        nmbSeq = Number(seq.value)

        if(nmbSeq <= 0){
            window.alert('Erro #02 : Sequência tem que ser maior ou igual a 1.')
        }
        else{
            if(nmbIni < nmbFim){
                for(let nmbCont = nmbIni; nmbCont <= nmbFim; nmbCont += nmbSeq){
                    res.innerHTML += `${nmbCont}`
                    res.innerHTML += `&#x1F449`
                }
            }
            else{
                for(let nmbCont = nmbIni; nmbCont >= nmbFim; nmbCont -= nmbSeq){
                    res.innerHTML += `${nmbCont}`
                    res.innerHTML += `&#x1F449`
                }
            }
            res.innerHTML += `&#x1F3C1`
        }
    }
}
