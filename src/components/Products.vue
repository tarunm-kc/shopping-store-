<template>
    <div>
        <h1>SHOPPING STORE</h1>
        <Navbar 
        :cart="cart" 
        :cartQty="cartQty" 
        :cartTotal="cartTotal"></Navbar>
        <ProductList
            :maximum="maximum" 
            :products="products"></ProductList>
    </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import ProductList from "./ProductList.vue";

export default {
    name: "products",
    props: [
        "products",
        "maximum",
        "cart",
        "cartQty",
        "cartTotal"
    ],
    components: {
        Navbar,
        ProductList
    }
};
</script>