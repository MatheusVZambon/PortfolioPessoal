function calc_tabuada(){
    let tab = document.getElementById('nmb_tabuada').value
    let res = document.getElementById('slc_tabuada')

    res.innerText = ''

    if(tab.length == 0){
        window.alert('Erro #01 : Algum dado está vazio.')
    }
    else{
        for(let cont = 1; cont < 11; cont++){
            let nxr = Number(tab) * cont
            let item = document.createElement('option')
            item.innerHTML = `${tab} X ${cont} = ${nxr}`
            item.value = `tab${cont}`
            res.appendChild(item)
        }
    }
}
