Vue.component('cart',{
    props: ['cart'],
    template: `<div class="cart">
               <button type="button"><i class="fas fa-shopping-cart" v-on:click="$parent.isVisibleCart"> </i></button>
                   <div class="cart-menu">
                        <div class="product-item-cart" v-for="(product, idx) of cart" :key="product.id_product" v-bind:id="product.id_product">
                            <div class="desc">
                                <h3 class="card-title">{{product.product_name.toUpperCase()}}</h3>
                                <p class="card-price">{{product.price}} $</p>
                            </div>
                            <div class="del-item">
                                <i class="fas fa-trash" v-on:click="$parent.removeProduct(idx)"></i>
                            </div>
                        </div>
                   </div>
               </div>`

});
