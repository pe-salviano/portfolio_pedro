function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 400 * i)
    });
}

const titulo = document.querySelector('.titulo-home');
typeWriter(titulo);


