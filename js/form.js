const enviar = (event) => {
    event.preventDefault();

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
    })
}
document.querySelector('form').addEventListener('submit', enviar);