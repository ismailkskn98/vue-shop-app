<template>
    <appFilterWrapper :categories="categories" :shortMode="shortMode" @newShort-event="this.shortMode = $event"
        @activeCategory-event="aktifCategori = $event" />
    {{ shortMode }}
    <appProducts :products="products" @clickBoxEvent='onClickBox($event)' />
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
        onClickBox(data) {
            console.log(data);
        },
        getProductByCategory(category) {
            fetch(`https://fakestoreapi.com/products/category/${category}?sort=${this.shortMode}`)
                .then(res => res.json())
                .then(data => {
                    this.products = data;
                })
        },
        getAllCategories() {
            fetch('https://fakestoreapi.com/products/categories')
                .then(res => res.json())
                .then(json => {
                    this.categories = json;
                })
        },
        getAllProducts(newShortMode) {
            fetch(`https://fakestoreapi.com/products?sort=${newShortMode}`)
                .then(res => res.json())
                .then(data => {
                    this.products = data;
                    // console.log(data);
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

<style scoped></style>