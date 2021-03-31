//Прежде всего у нас есть товар, создадим для него класс GoodsItem.
// На текущем этапе у него будет два свойства – title и price – и один метод render, который будет возвращать html-разметку.

class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        // return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
        return `<div class="col">
        <div class="card">
            <img src="https://picsum.photos/200" class="card-img-top" alt="...">
            <a href="#"> <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Цена: ${this.price}</small></p>
            </div></a>
        </div>
    </div>`
    }
}

//список товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    sum() { // метод для вычисления суммы всех товаров
        let sum = 0;
        for (let i = 0; i < this.goods.length; i++) {
            sum += this.goods[i].price;
        }
        console.log(sum);
    }
}

class Cart {
    addToCart() {   //Добавить в корзину

    }
    deleteFromCart() { //Удалить из корзины

    }
    sum() { //сумма товаров в корзине

    }
}


const list = new GoodsList();
list.fetchGoods();
list.render();
list.sum();


// const goods = [
//     {title: 'Shirt', price: 150},
//     {title: 'Socks', price: 50},
//     {title: 'Jacket', price: 350},
//     {title: 'Shoes', price: 250},
//     {price: 250},
//     {title: 'Shoes'},
// ];
//
// const renderGoodsItem = (title = 'Товар', price = "Уточняйте у менеджера") => {
//     // return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
//         return `<div class="col">
//         <div class="card">
//             <img src="https://picsum.photos/200" class="card-img-top" alt="...">
//             <a href="#"> <div class="card-body">
//                 <h5 class="card-title">${title}</h5>
//                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                 <p class="card-text"><small class="text-muted">Цена: ${price}</small></p>
//             </div></a>
//         </div>
//     </div>`
// };
//
// const renderGoodsList = (list) => {
//     let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join('');
// }
//
// renderGoodsList(goods);