<template>
    <div>
        <Navbar 
        :cart="cart" 
        :cartQty="cartQty" 
        :cartTotal="cartTotal"></Navbar>
        <ProductList
            :maximum="maximum" 
            :products="products"></ProductList>
    </div>
</template>

<script lang="ts">
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