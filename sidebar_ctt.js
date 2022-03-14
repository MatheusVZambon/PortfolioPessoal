document.getElementById('dflt').click()

function expandir(change,contato){
    var cont, tab_con, tab_lnk
    tab_con = document.getElementsByClassName('div_tab_con')
    for (cont = 0; cont < tab_con.length; cont++){
        tab_con[cont].style.display = 'none'
    }
    tab_lnk = document.getElementsByClassName('btn_tab_ctt')
    for (cont = 0; cont < tab_lnk.length; cont++){
        tab_lnk[cont].className = tab_lnk[cont].className.replace(' active','')
    }
    document.getElementById(contato).style.display = 'block'
    change.currentTarget.className += ' active'
}
