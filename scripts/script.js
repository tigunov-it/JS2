const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        imgCatalog: 'https://picsum.photos/200',
        userSearch: '',
        cart: []
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            console.log(product.id_product);
            this.cart.push(product);

        },
        removeProduct(idx) {
            console.log(idx);
            this.cart.splice(idx, 1);
        },
        isVisibleCart() {
            document.querySelector('.cart-menu').classList.toggle('visible');
        },

        filterGoods() {
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product =>
                regexp.test(product.product_name));
            this.products.forEach(product => {
                // const block = document.querySelector(`.product-item[data-id="${product.id_product}"]`);
                const block = document.getElementById(`${product.id_product}`);
                if (!this.filtered.includes(product)) {
                    block.classList.add('invisible');
                } else {
                    block.classList.remove('invisible');
                }
            })
        },
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
        this.getJson(`getProducts.json`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    }
})

// class ProductsList {
//     constructor(container = '.products') {
//         this.container = container;
//         this.goods = [];
//         this.allProducts = [];
//         this._fetchProducts();
//     }
//
//     _fetchProducts() {
//         this.goods = [
//             {id: 1, title: 'Notebook', price: 2000},
//             {id: 2, title: 'Mouse', price: 20},
//             {id: 3, title: 'Keyboard', price: 200},
//             {id: 4, title: 'Gamepad', price: 50},
//         ];
//     }
//
//     render() {
//         const block = document.querySelector(this.container);
//         for (let product of this.goods) {
//             const productObj = new ProductItem(product);
//             this.allProducts.push(productObj);
//             block.insertAdjacentHTML('beforeend', productObj.render())
//         }
//     }
//
//     sum() { // метод для вычисления суммы всех товаров
//         let sum = 0;
//         for (let i = 0; i < this.goods.length; i++) {
//             sum += this.goods[i].price;
//         }
//         console.log(sum);
//     }
//
// }
//
// class ProductItem {
//     constructor(product, img = 'https://picsum.photos/200') {
//         this.title = product.title;
//         this.price = product.price;
//         this.id = product.id;
//         this.img = img;
//
//     }
//
//     render() {
//         // return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
//         return `<div class="products product-item" id="${this.id}">
//         <div class="card">
//             <img src="https://picsum.photos/200" class="card-img-top" alt="...">
//             <a href="#"> <div class="card-body">
//                 <h5 class="card-title">${this.title}</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 <p class="card-text"><small class="text-muted">Цена: ${this.price}</small></p>
//                 <button class="buy-btn button">Купить</button>
//             </div></a>
//         </div>
//     </div>`
//     }
//
// }
//
// let list = new ProductsList();
// list.render();
// list.sum();
//
// class Cart {
//     constructor(container = ".cart-menu") {
//        this.container = container;
//     }
//
//     addGoods(item) {
//         const block = document.querySelector(this.container);
//         block.insertAdjacentHTML('beforeend', `<p> ${item} </p>` );
//         }
//
//     removeGoods() {
//
//     }
//
//     changeGoods() {
//
//     }
// }
//
// let cart = new Cart();
// listener();
//
// function listener () {
//     const buttonItems = document.querySelectorAll('.buy-btn');
//     for (let i = 0; i < buttonItems.length; i++) {
//         let button = buttonItems[i];
//         button.addEventListener('click', function (event) {
//             cart.addGoods(event.target.parentElement.innerText);
//             console.log(event.target);
//             console.log(event.target.parentNode);
//         })
//     }
// }
