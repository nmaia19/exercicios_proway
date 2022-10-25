const total = document.getElementById('num-items')

document.querySelectorAll('input[type="checkbox"]').forEach( i => {
    i.onclick = () => mostrarSelecionados();
})

function mostrarSelecionados() {
    total.innerHTML = document.querySelectorAll('input[type="checkbox"]:checked').length
}
