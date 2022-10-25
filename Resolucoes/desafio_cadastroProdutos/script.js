// dados da tabela que será posteriormente modificada
const table = document.getElementById('table__body')

// array de apoio para operações internas
let produtos = []

// listeners para acompanhar os eventos da page
const btnAdd = document.getElementById('btn__add')
btnAdd.addEventListener('click', () => {
    addProduto()
})

const pesquisa = document.querySelector('.block__search')

pesquisa.addEventListener('keydown', e => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter'){
        searchItem(pesquisa.value)
    }
})

// ----- FUNÇÕES PRINCIPAIS -----

function addProduto(){

    // informações para cadastro de novo produto
    const produto = document.querySelector('.input__produto').value
    const preco = document.querySelector('.input__preco').value
    const estoque = document.querySelector('.input__estoque').value
    const un = document.getElementById('unidades-select').value

    let dadosValidos = validadeInputs(produto, preco, estoque, un)

    if(dadosValidos){
        // quando a variavel que armazena o valor tem o mesmo nome do atributo, basta informar um só
        produtos.push({
            produto,
            preco,
            estoque,
            unidadeMedida: un
        })

        buildTable()
    } else {
        alert('Dados inválidos')
    }
}

const validadeInputs = (newProduto, newPreco, newEstoque, newUM) => {
    let dadosValidos = true

    if(newProduto.length < 1 || newPreco < 0 || newEstoque < 0 || newUM == null){
        dadosValidos = false
    }

    return dadosValidos
}

const buildTable = () => {
    table.innerHTML = ''

    produtos.forEach(item => {
        table.innerHTML += `
            <tr>
                <td>${item.produto}</td>
                <td>${item.preco}</td>
                <td>${item.estoque}</td>
                <td>${item.unidadeMedida}</td>
            </tr>
        `
    })
}

function searchItem(value){
    let itemFound = false
    // warning.classList.add('hidden')
    pesquisa.value = ''
    let userSeach = new RegExp(value, 'gi')

    if (userSeach == '') {
        items.forEach(function (item) {
            item.classList.remove('hidden')
        })
    } else {
        items.forEach(function (item) {
            if (item.innerText.match(userSeach) != null) {
                item.classList.remove('hidden')
                itemFound = true
            } else {
                item.classList.add('hidden')
            }
        })

    // if (itemFound === false) {
    //     warningMessage()
    // }
    }
}