const cidade = document.querySelector('.cidades')

const descriptionList = ["descriçao da cidade 1", "descriçao da cidade 2", "descriçao da cidade 3", "descriçao da cidade 4", "descriçao da cidade 5"]

cidade.addEventListener("change", e =>{
    const descricao = document.getElementById("description")
    descricao.innerHTML = descriptionList[parseInt(e.target.value)-1]
})
