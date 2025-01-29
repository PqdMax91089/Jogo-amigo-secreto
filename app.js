let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");

    const nome = inputAmigo.value.trim();
    if (nome) {
        if (!amigos.includes(nome)) {
            amigos.push(nome);
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        } else { 
            alert("Este nome já fo adicionado!");
        }
     } else { 
        alert("Por favor, insira um nome válido.");
          
        }
        inputAmigo.value = "";
        inputAmigo.focus();

    }
    function sortearAmigo(){
        if (amigos.length === 0) {
            alert("A lista de amigos está vazia. Adicione ao menos um nome para Sortear.");
            return;

        }
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceSorteado];
        
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = ""; // Limpa o resultado anterior
        
        const li = document.createElement("li");
        li.textContent = `O amigo secreto é: ${amigoSorteado}`;
        resultado.appendChild(li);
        }

