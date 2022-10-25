

function calcular(){
    const input = document.getElementById('valor').value
    const metodo = document.querySelector('input[name="pgto"]:checked').value
    const form = document.getElementById('form')
    let total = 0
    let desconto = 0
    
    form.addEventListener("click", function(event){event.preventDefault()});  


    if(input < 100){
        total = input
    } else if (metodo == 'vista'){
        desconto = (input * 0.1)
    }

    total = input - desconto

    document.getElementById('valor-final').innerHTML = total

}