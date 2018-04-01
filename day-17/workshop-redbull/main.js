let raw = document.querySelector("#raw")

class AllProduct {
    constructor() {
        this.all = []
    }

    add(product) {
        this.all.push(product)
    }
}


class Product {
    constructor(image, title, price) {
        this.image = image
        this.title = title
        this.price = price
    }
}

// retrieve data from json
axios.get("https://www.redbullshopus.com/products.json")
    .then((response) => {
        let data = response.data.products
        console.log(data)
        let allProduct = new AllProduct()


        data.forEach((item) => {
            let div = document.createElement("div")
            div.className = "wrap"
            raw.appendChild(div)
            let img = document.createElement("img")
            let title = document.createElement("figcaption")
            let price = document.createElement("p")

            let product = new Product(
                item.images[0].src,
                item.title,
                item.variants[0].price
            )

            allProduct.add(product)

            img.src = product.image
            title.innerHTML = product.title
            price.innerHTML = `${product.price} $`


            div.appendChild(img)
            div.appendChild(title)
            div.appendChild(price)
        })

    }).catch((error) => {
        console.log(error)
    })