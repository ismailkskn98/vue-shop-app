<template>
    <header>
        <div @click="$router.push('/')" class="logo">Logo</div>
        <div class="box">
            <div class="badge" v-if="getBasketLength > 0">{{ getBasketLength }}</div>
            <svg @click="onShow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-shopping-cart">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <shopContext @goBasket="show = !show" v-show="show" />
        </div>
    </header>
</template>

<script>
import shopContext from '../components/shopContext.vue';
import { mapGetters } from 'vuex';
export default {
    components: {
        shopContext,
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        onShow() {
            // if (this.getBasketLength > 0) {
            //     this.show = !this.show;
            // }
            this.show = !this.show;
        }
    },
    computed: {
        ...mapGetters({
            getBasketLength: 'getBasketLength',
        })
    }
}
</script>

<style scoped>
header {
    background-color: #fdfdfd;
    border-bottom: 1px solid #f3f3f3;
    padding: 16px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    cursor: pointer;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 5px;
}

.box {
    position: relative;
    color: #374051;
    transition: all .3s ease;
}

.box svg:hover {
    color: #1874ff;
    cursor: pointer;
}

.badge {
    position: absolute;
    top: -9px;
    right: -9px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    color: #fff;
    background-color: #1874ff;
    border-radius: 100%;
    font-size: 10px;
}
</style>