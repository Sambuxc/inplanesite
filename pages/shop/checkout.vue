<script setup>
  import { useNuxtApp, useRuntimeConfig } from "#app";
  import { onMounted } from "vue";
  import { loadStripe } from "@stripe/stripe-js";

  const {cartItems, addCartItem, removeCartItem, totalCartPrice} = useCart();

  // if no cart items redirect to shop
  if (cartItems.value.length < 1) {
    useNuxtApp().$router.push('/shop');
  }

  // Accessing environment variables
  const config = useRuntimeConfig();
  const stripePk = config.public.STRIPE_PUBLIC_KEY;

  console.log('config NUXT_STRIPE_PUBLIC_KEY', config.public.NUXT_STRIPE_PUBLIC_KEY);
  console.log('stripePk', stripePk); // this is null, might need to include it in nuxt config

  // stripe setup
  const isProcessing = ref(false);
  let stripe;
  let elements;
  let paymentElement;
  let clientSecret;

  onMounted(async () => {
    await initializeStripe();
  });

  const initializeStripe = async () => {
    stripe = await loadStripe(stripePk);

    // Create a payment intent on your server
    const res = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: totalCartPrice
      })
    });

    const result = await res.json();
    clientSecret = result.client_secret;

    elements = stripe.elements({clientSecret});

    // Create and mount the Payment Element
    paymentElement = elements.create('payment');
    paymentElement.mount('#payment-element');

    isProcessing.value = false;
  };

  const pay = async () => {
    isProcessing.value = true;

    try {
      const {error} = await stripe.confirmPayment({
        elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: 'John Doe',
              email: 'john.doe@example.com',
              phone: '+1234567890',
            },
          },
        },
        redirect: 'if_required' // Stay on the same page unless redirect is necessary
      });

      if (error) {
        console.error('Payment error:', error);
        document.querySelector('#payment-error').textContent = error.message;
        isProcessing.value = false;
      } else {
        console.log('Payment succeeded');
        // Handle post-payment success actions, like showing a success message
      }
    } catch (error) {
      console.error('Payment processing error:', error);
      document.querySelector('#payment-error').textContent = 'An error occurred. Please try again.';
      isProcessing.value = false;
    }
  };
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