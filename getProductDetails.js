function(ele) {
    const redElements = document.querySelectorAll("span[style='color:red']");

    const products = [];

    for (let redElement of redElements) {
        let trElements = redElement.closest('table').querySelectorAll('tr');
        let product = {};
        let productImg = trElements[0].querySelector('img').src;
        let productName = trElements[1].querySelectorAll('td')[1].textContent;
        let productCode = trElements[2].querySelectorAll('td')[1].textContent;
        let productPrice = trElements[3].querySelectorAll('td')[1].textContent;
        let productFrom = trElements[4].querySelectorAll('td')[1].textContent;
        product = { productImg, productName, productCode, productPrice, productFrom };
        products.push(product);
    }

    return JSON.stringify(products);
}
