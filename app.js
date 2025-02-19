// crie um array pra armazenar os nomes
let amigos = [];

// parte 1 trello - Implementa uma função para agregar amigos

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === "") {
        window.alert('Por favor, insira um nome');
    } else {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = "";
        console.log(amigos);
        adicionarLista();
    }

}

//parte 2 trello - Implementa uma função para atualizar a lista de amigos

function adicionarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// parte 3 do trello - criar a função que sorteia o amigo

function sortearAmigo(){
    if (amigos.length === 0) {
        window.alert('Não há amigos para sortear!');
    } else {
        let aleatorio = Math.floor(Math.random()*amigos.length);
        let sorteado = amigos[aleatorio];
        document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${sorteado}`;
    }
}