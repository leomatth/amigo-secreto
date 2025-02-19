# Projeto Amigo Secreto

Este é um projeto simples de "Amigo Secreto" desenvolvido com **HTML**, **CSS** e **JavaScript**. A aplicação permite que os usuários adicionem amigos a uma lista e, em seguida, sorteiem aleatoriamente um amigo para realizar o amigo secreto. Este projeto é um desafio incentivado pelo curso de aprendizado da Alura em parceria com a ONE, Oracle Next Education - Turma G8.

Apesar de já ter uma noção do uso de ** JavaScript ** a Alura tem me ajudado bastante no desenvolvimento da prática e vons costumes. 

## Funcionalidades

### 1. **Adicionar Amigo**
- O usuário pode adicionar amigos ao sistema digitando o nome no campo de entrada e clicando no botão "Adicionar".
- Os nomes são armazenados em um array e exibidos em uma lista logo abaixo do campo de entrada.

### 2. **Exibir Lista de Amigos**
- A lista de amigos é atualizada sempre que um novo amigo é adicionado.
- A lista de amigos é exibida dinamicamente no HTML usando o método `innerHTML`.

### 3. **Sortear Amigo Secreto**
- O sistema pode sortear aleatoriamente um amigo da lista.
- O sorteio é feito através de um índice aleatório gerado com `Math.random()` e `Math.floor()`.
- O nome do amigo sorteado é exibido em uma área específica na página.

## Tecnologias Utilizadas

- **HTML**: Estrutura da página e formulário de entrada.
- **CSS**: Estilos para o layout e design da aplicação.
- **JavaScript**: Lógica para adicionar amigos à lista, atualizar a interface e realizar o sorteio.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/leomatth/amigo-secreto.git
2. Navegue até o diretório do projeto:
3. bash
4.Copiar
5.Editar
6.cd amigo-secreto
7.Abra o arquivo index.html no seu navegador para visualizar o projeto utilizando o liveserver (extensão do VSCode)

## Como Contribuir
1. Fork este repositório.
2. Crie uma branch para sua modificação (git checkout -b minha-branch).
3. Realize as alterações desejadas.
4. Adicione e faça commit das suas mudanças (git commit -am 'Minha modificação').
5. Envie para o repositório remoto (git push origin minha-branch).
6. Abra um pull request.

## Funções Implementadas

1. adicionarAmigo()
A função adicionarAmigo() é responsável por capturar o nome inserido pelo usuário, validar se o campo está vazio e adicionar o nome ao array de amigos.

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
    if (nomeAmigo === "") {
        window.alert('Por favor, insira um nome');
    } else {
        amigos.push(nomeAmigo);
        document.getElementById('amigo').value = "";
        console.log(amigos);
    }
}


2. adicionarLista()
A função adicionarLista() percorre o array de amigos e adiciona cada nome à lista no HTML, exibindo-os dinamicamente.

function adicionarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


3. sortearAmigo()
A função sortearAmigo() sorteia aleatoriamente um amigo da lista e exibe o nome do amigo sorteado na interface.

function sortearAmigo(){
    if (amigos.length === 0) {
        window.alert('Não há amigos para sortear!');
    } else {
        let aleatorio = Math.floor(Math.random()*amigos.length);
        let sorteado = amigos[aleatorio];
        document.getElementById('resultado').innerHTML = `O amigo sorteado é: ${sorteado}`;
    }
}


Licença
Este projeto é licenciado sob a MIT License.

### Explicação:
- **Funcionalidades**: Descreve os recursos que o projeto oferece, como a adição de amigos, a exibição da lista e o sorteio do amigo secreto.
- **Tecnologias Utilizadas**: Lista as tecnologias usadas no projeto (HTML, CSS e JavaScript).
- **Como Rodar o Projeto**: Instruções sobre como clonar o repositório e visualizar o projeto localmente.
- **Como Contribuir**: Passos para quem quiser contribuir com o projeto.
- **Funções Implementadas**: Explica e mostra o código das funções chave do projeto.
- **Screenshots**: Caso você queira adicionar imagens do projeto, pode colocar aqui (uma pasta `screenshots` pode ser criada para armazenar essas imagens).
- **Licença**: Para fins de boa prática, é indicado adicionar uma licença ao repositório (você pode ajustar conforme o que for necessário).

Este modelo de README fornecerá uma visão clara sobre o seu projeto e as instruções necessárias para qualquer pessoa que queira entender ou contribuir para o projeto.
