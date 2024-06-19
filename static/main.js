function alterarConteudo () {
    document.getElementById("demo").innerHTML = "Conteúdo alterado!";
}

function testarSoma() {
    document.write(5 + 6)
}

function somaEmAlerta() {
    //O "window" é opcional. Só o "alert(5+6)" funcionar normalmente 
    window.alert(5 + 6)
}

function somaNoConsole() {
    console.log(5+6)
}

function imprimirPagina() {
    window.print()
}