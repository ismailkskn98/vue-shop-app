<template>
    <div class="container">
        <appFilterWrapper :categories="categories" :shortMode="shortMode" @newShort-event="this.shortMode = $event"
            @activeCategory-event="aktifCategori = $event" />
        <appProducts :products="products" />
    </div>
</template>

<script>
import appFilterWrapper from '../components/appFilterWrapper.vue'
import appProducts from '../components/appProducts.vue'
export default {
    components: {
        appFilterWrapper,
        appProducts
    },
    created() {
        this.getAllCategories();
        this.getAllProducts();
    },
    methods: {
        getProductByCategory(category) {
            fetch(`https://fakestoreapi.com/products/category/${category}?sort=${this.shortMode}`)
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        const finded = this.$store.getters.getBasket.find(basketItem => basketItem.id === item.id);
                        if (finded) {
                            item.inBox = true;
                        }
                    })
                    this.products = data;
                })
        },
        getAllCategories() {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        const finded = this.$store.getters.getBasket.find(basketItem => basketItem.id === item.id);
                        if (finded) {
                            item.inBox = true;
                        }
                    })
                    this.categories = data;
                })
        },
        getAllProducts(newShortMode) {
            fetch(`https://fakestoreapi.com/products?sort=${newShortMode}`)
                .then(res => res.json())
                .then(data => {
                    data.forEach(item => {
                        const finded = this.$store.getters.getBasket.find(basketItem => basketItem.id === item.id);
                        if (finded) {
                            item.inBox = true;
                        }
                    })
                    this.products = data;
                })
        }
    },
    data() {
        return {
            categories: [],
            products: [],
            shortMode: 'asc',
            aktifCategori: ''.toLowerCase(),
        }
    },
    watch: {
        shortMode(newValue) {
            if (this.aktifCategori === '') {
                this.getAllProducts(newValue);
            } else {
                this.getProductByCategory(this.aktifCategori);
            }
        },
        aktifCategori(newValue) {
            if (newValue === '') {
                this.getAllProducts(this.shortMode);
            } else {
                this.getProductByCategory(newValue);
            }
        }
    }
}
</script>

<style scoped>
.container {
    padding: 0 64px;
}
</style>