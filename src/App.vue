<template>
    <div id="app" class="container mt-5">
        <router-view
            :cart="cart"
            :cartQty="cartQty"
            :cartTotal="cartTotal"
            :products="products"
            @delete="deleteItem"
            @add="addItem"
        ></router-view>
    </div>
</template>

<script>
export default {
    name: "app",

    data: function() {
        return {
            maximum: 99,
            cart: [],
            products: [
                {
                    id: 1,
                    imgUrl:
                        "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                    name: "CHECK PRINT SHIRT",
                    description:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid tempore dicta voluptate expedita, dolores reiciendis sed aliquam dolorum recusandae sit aperiam repellat quisquam officiis architecto laboriosam vitae, alias accusamus incidunt?",

                    price: 1499
                },
                {
                    id: 2,
                    imgUrl:
                        "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                    name: "GLORIA HIGH LOGO SNEAKER",
                    description:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid tempore dicta voluptate expedita, dolores reiciendis sed aliquam dolorum recusandae sit aperiam repellat quisquam officiis architecto laboriosam vitae, alias accusamus incidunt?",
                    price: 3299
                },
                {
                    id: 3,
                    imgUrl:
                        "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
                    name: "CATE RIGID BAG",
                    description:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid tempore dicta voluptate expedita, dolores reiciendis sed aliquam dolorum recusandae sit aperiam repellat quisquam officiis architecto laboriosam vitae, alias accusamus incidunt?",
                    price: 4999
                },
                {
                    id: 4,
                    imgUrl:
                        "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
                    name: "GUESS CONNECT WATCH",
                    description:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid tempore dicta voluptate expedita, dolores reiciendis sed aliquam dolorum recusandae sit aperiam repellat quisquam officiis architecto laboriosam vitae, alias accusamus incidunt?",
                    price: 8499
                },
                {
                    id: 5,
                    imgUrl:
                        "https://i.imgur.com/HO8e9b8.jpg",
                    name: "'FORMAL ELEGANCE SHIRTS",
                    description:
                        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid tempore dicta voluptate expedita, dolores reiciendis sed aliquam dolorum recusandae sit aperiam repellat quisquam officiis architecto laboriosam vitae, alias accusamus incidunt?",
                    price: 2699
                }
            ]
        };
    },
    computed: {
        cartTotal: function() {
            let sum = 0;
            for (let key in this.cart) {
                sum = sum + this.cart[key].product.price * this.cart[key].qty;
            }
            return sum;
        },
        cartQty: function() {
            let qty = 0;
            for (let key in this.cart) {
                qty = qty + this.cart[key].qty;
            }
            return qty;
        }
    },
    methods: {
        deleteItem: function(id) {
            if (this.cart[id].qty > 1) {
                this.cart[id].qty--;
            } else {
                this.cart.splice(id, 1);
            }
        },
        addItem: function(product) {
            var whichProduct;
            var existing = this.cart.filter(function(item, index) {
                if (item.product.id == Number(product.id)) {
                    whichProduct = index;
                    return true;
                } else {
                    return false;
                }
            });
            if (existing.length) {
                this.cart[whichProduct].qty++;
            } else {
                this.cart.push({ product: product, qty: 1 });
            }
        }
    }
};
</script>