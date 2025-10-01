import Stripe from 'stripe';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(body.amount), // Amount in cents
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
        });

        return {
            client_secret: paymentIntent.client_secret
        };
    } catch (error) {
        console.error('Error creating PaymentIntent:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Error creating payment intent',
        });
    }
});