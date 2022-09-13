// 
const botaoEnviar = document.querySelector('.botao-enviar')

//Adciona o loading ao clicar no botão
const addloading = () => {
    botaoEnviar.innerHTML = '<img class="loading" src="./assets/imagem/loading-caracol.gif" alt="">';
}

// Remove o loading e muda para enviado 
const removeloading = () => {
    botaoEnviar.innerHTML = 'Enviado com sucesso';
    
}


const enviar = (event) => {
    event.preventDefault();
    addloading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const mensagem = document.querySelector('textarea[name=mensagem]').value;

    fetch ('https://api.sheetmonkey.io/form/dS9euxjKVX7K3ewKb6stMr', {
        method: 'post',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, mensagem}),
    }).then(() => removeloading());
}
document.querySelector('form').addEventListener('submit', enviar);