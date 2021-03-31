const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
    {price: 250},
    {title: 'Shoes'},
];

const renderGoodsItem = (title = 'Товар', price = "Уточняйте у менеджера") => {
    // return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
        return `<div class="col">
        <div class="card">
            <img src="https://picsum.photos/200" class="card-img-top" alt="...">
            <a href="#"> <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Цена: ${price}</small></p>
            </div></a>
        </div>
    </div>`
};

const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
}

renderGoodsList(goods);