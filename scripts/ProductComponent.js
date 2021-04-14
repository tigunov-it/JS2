Vue.component('products', {
    props: ['products', 'imgCatalog'],
    template: `<div class="products">
                   <div class="product-item" v-for="product of products" :key="product.id_product"
                       v-bind:id="product.id_product">
                       <img class="card-img-top" :src="imgCatalog" alt="Some img">
                       <div class="desc">
                           <h3 class="card-title">{{product.product_name.toUpperCase()}}</h3>
                           <p class="card-price">{{product.price}} $</p>
                           <button class="buy-btn" v-on:click="$parent.addProduct(product)">Купить</button>
                       </div>
                   </div>
                </div>`
});