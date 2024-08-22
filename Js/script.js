function logar(){
                    
    var login = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){   
        alert('Sucesso');
        //location.href = "home.html";
        window.open('poslogin/home.html')
    }else{
        alert('usuario ou senha incorretos');
    }

}   