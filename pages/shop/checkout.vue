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
    <!-- Stripe form begins here -->

  </div>
</template>