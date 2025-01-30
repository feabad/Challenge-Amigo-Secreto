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
    
    // Limpar o campo de entrada
    inputAmigo.value = "";
}
