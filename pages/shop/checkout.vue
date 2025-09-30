<script setup>
  import { useNuxtApp } from "#app";

  const {cartItems, addCartItem, removeCartItem, totalCartPrice} = useCart();

  // if no cart items redirect to shop
  if (cartItems.value.length < 1) {
    useNuxtApp().$router.push('/shop');
  }
</script>
<template>
  <div
      v-if="cartItems.length > 0"
      class="flex flex-col items-center py-20"
  >
    <h2 class="text-[32px] leading-none text-appGray-700 mb-10">
      Checkout
    </h2>
    <NuxtLink
        to="/shop"
        class="flex max-w-max text-2xl leading-none tracking-[-0.5px] px-14 pt-3.5 pb-[18px] bg-white border border-appGray-400 mx-auto transition-colors duration-300 hover:bg-appText hover:text-white"
    >
      Shop
    </NuxtLink>
  </div>
</template>