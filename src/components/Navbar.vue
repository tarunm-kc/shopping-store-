<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand brand" href="#">SHOPPING STORE</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a href="#">
            <button class="btn btn-outline-success my-2 my-sm-0" @click="$parent.$emit('toggle')"> $ CART
            <span class="badge rounded-pill badge-notification bg-danger">{{ cartQty }}</span>
            </button>
        </a>
      </li>
    </ul>

    <router-link to="/wishlist">
        <button class="btn btn-outline-warning my-1 my-sm-1 wishlist">Wishlist</button>
    </router-link>

    <router-link to="/">
        <button class="btn btn-outline-danger my-1 my-sm-1 logout">Logout</button>
    </router-link>

  </div>
</nav>
</template>

<script lang="ts">
import Price from "./Price.vue";
export default {
    name: "navbar",
    props: ["cart", "cartQty", "cartTotal"],
    components: {
        Price,
    }
};
</script>

<style scoped>
.brand {
    text-decoration: none;
    font-weight: bolder;
    font-size: large;
    margin-right: 52rem;
}

a {
    padding: 10px;
    margin-right: 10px;
}

.wishlist, .logout {
    margin-right: 10px;
}

nav {
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
}
</style>
