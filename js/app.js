let listaAmigos = []

function adicionar(){
    let nome = document.getElementById('nome-amigo').value
    if (nome != ""){
        listaAmigos.push(nome)
        let listaNomes = document.getElementById("lista-amigos")
        listaNomes.textContent = listaAmigos.join(", ")
    } else {
        alert ('Digite o nome do amigo, amigo')
    }
console.log(listaAmigos)
document.getElementById('nome-amigo').value = ""
}

function sortear(){
    embaralha(listaAmigos)
    let sorteio = document.getElementById('lista-sorteio')

    for(i = 0; i < listaAmigos.length; i++){
        if (i == listaAmigos.length - 1){
            let amigo1 = listaAmigos[listaAmigos.length - 1]
            let amigo2 = listaAmigos[0]
            sorteio.innerHTML = sorteio.innerHTML + amigo1 + ' --> ' + amigo2 + '<br>'
        } else {
        let amigo1 = listaAmigos[i];
        let amigo2 = listaAmigos[i+1]
        sorteio.innerHTML = sorteio.innerHTML + amigo1 + ' --> ' + amigo2 + '<br>'
    }   
}
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    listaAmigos = [];
    document.getElementById("lista-amigos").innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
}