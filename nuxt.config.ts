// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-svgo',
        '@thebcms/nuxt',
    ],
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    components: true,
    vite: {
        build: {
            // Disable CSS minification warnings
            minify: false
        },
        logLevel: 'error' // Only show errors, not warnings
    },
    app: {
        head: {
            htmlAttrs: {
                lang: 'en',
            },
        },
    },
    runtimeConfig: {
        stripe: {
            publishableKey: process.env.NUXT_STRIPE_PUBLIC_KEY,
        },
    },
    bcms: {
        orgId: process.env.BCMS_ORG_ID,
        instanceId: process.env.BCMS_INSTANCE_ID,
        privateClientOptions: {
            key: {
                id: process.env.BCMS_API_KEY_ID!,
                secret: process.env.BCMS_API_KEY_SECRET!,
            },
            options: {
                injectSvg: true,
            },
        },
        publicClientOptions: {
            key: {
                id: process.env.NUXT_PUBLIC_BCMS_API_KEY_ID!,
                secret: process.env.NUXT_PUBLIC_BCMS_API_KEY_SECRET!,
            },
            options: {
                injectSvg: true,
            },
        },
    },
    css: ['~/assets/styles/main.scss'],
});
