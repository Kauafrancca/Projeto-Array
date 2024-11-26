const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonDiscount = document.querySelector(".discount")
const buttonReduce = document.querySelector(".subtotal")
const buttonFilter = document.querySelector(".filtro")

function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    return newValue
}


function showAll(productsArray) {
    let myLi = ""

    productsArray.forEach(product => {
        myLi += `
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price"> ${formatCurrency(product.price)}</p>
        </li>
        `
    })

    list.innerHTML = myLi

}

function DiscountAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

function mostrarnaTela() {
    const total = menuOptions.reduce((acc, newValue) => acc + newValue.price, 0)

    list.innerHTML = `
    <li>
       <p>O valor total dos itens no menu é: ${formatCurrency(total)} reais</p>
    </li>
    `
}

function filtrarVegan() {
    const filtro = menuOptions.filter(product => product.vegan )

    showAll(filtro)
}


buttonShowAll.addEventListener("click", () => showAll(menuOptions))  // Tem colocar a função anônima se não já aparece na tela
buttonDiscount.addEventListener("click", DiscountAll)
buttonReduce.addEventListener("click", mostrarnaTela)
buttonFilter.addEventListener("click", filtrarVegan)