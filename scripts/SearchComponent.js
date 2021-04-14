Vue.component('search', {
    props: ['userSearch'],
    template: `<div class="search">
                    <form action="#" class="search-form">
                        <input type="text" class="search-field" v-model="$parent.userSearch">
                        <button class="btn-search" type="submit" v-on:click.prevent="$parent.filterGoods">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
               </div>`
});


// <div className="search">
//     <form action="#" className="search-form">
//         <input type="text" className="search-field" v-model="userSearch">
//             <button className="btn-search" type="submit" v-on:click.prevent="filterGoods">
//                 <i className="fas fa-search"></i>
//             </button>
//     </form>
// </div>