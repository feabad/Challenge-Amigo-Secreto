// Array para armazenar os nomes dos amigos
const listaDeAmigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();
    
    // Validar a entrada
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    // Atualizar o array de amigos
    listaDeAmigos.push(nomeAmigo);
    
    // Atualizar a lista exibida
    atualizarListaAmigos();
    
    // Limpar o campo de entrada
    inputAmigo.value = "";
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaElemento = document.getElementById("listaAmigos");
    
    // Limpar a lista antes de atualizar
    listaElemento.innerHTML = "";
    
    // Percorrer o array e criar elementos <li> para cada amigo
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElemento.appendChild(li);
    });
}

