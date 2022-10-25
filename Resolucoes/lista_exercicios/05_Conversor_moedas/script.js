// "use strict";

const form = document.getElementById("form")
const label_from_currency = document.getElementById('from_currency');

const label_to_currency = document.getElementById('to_currency');
const output_ammount = document.getElementById('valor-final');

main();

function main() {
    let currency = { "BRL": "Real", "EUR": "Euro", "USD": "Dolar", "GBP": "Libra" };
    let optionsFrom = [];
    let optionsTo = [];
    for (var [key, value] of Object.entries(currency)) {
        optionsFrom.push(
            `<input name="from" value='${key}' type="radio" />
            <label class="form__label" for=${value}>${value}</label>`);
    }

    for (var [key, value] of Object.entries(currency)) {
        optionsTo.push(
            `<input name="to" value='${key}' type="radio" />
            <label class="form__label" for=${value}>${value}</label>`);
    }
    label_from_currency.innerHTML = optionsFrom.join('\n');
    label_to_currency.innerHTML = optionsTo.join('\n');
    // calculate();
}

async function getURL(url) {
    return (await fetch(url)).json();
}



async function calculate() {

    form.addEventListener("click", function(event){event.preventDefault()});  

    // valor a ser convertido, fornecido pelo usuário
    const input_ammount = document.getElementById('valor').value;
    // tratamento de dados da moeda de origem
    const from_data = document.querySelectorAll('input[name="from"]:checked')
    let from = from_data[0].getAttribute('value')

    //tratamento de dados da moeda para qual o valor será convertido
    const to_data = document.querySelectorAll('input[name="to"]:checked')
    let to = to_data[0].getAttribute('value')

    
    const fullData = await getURL(`https://v6.exchangerate-api.com/v6/9ae5bbe6afab6bff228a9d7f/latest/${from}`);
    let rates = fullData['conversion_rates'];
    let rate = rates[to]
    console.log(rate)
    output_ammount.innerHTML = (input_ammount * rate).toFixed(2);
}