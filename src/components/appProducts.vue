<template>
    <div class="grid-cards">
        <AppProductsCard @clickBoxEvent="$emit('clickBoxEvent', $event)" v-for="product in products" :key="product.id"
            :product="product" />
    </div>
</template>

<script>
import AppProductsCard from './appProductsCard.vue';
import appProductsCard from './appProductsCard.vue';
export default {
    components: {
        appProductsCard,
        AppProductsCard
    },
    props: {
        products: {
            type: Array,
        }
    }
}
</script>

<style scoped>
.grid-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // 3 kutu varsa bütün alanı doldur */
    gap: 10px;
    margin: 15px 30px;
}
</style>