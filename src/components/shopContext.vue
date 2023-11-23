<template>
    <div class="context-wrapper">
        <div :class="{ 'border-bottom': ($store.getters.getBasketLength - 1) !== index }" v-for="(item, index) in getBasket"
            :key="item.id" class="context-item">
            <div class="image">
                <img :src="item.image" :alt="item.title" />
            </div>
            <div class="content">
                <div class="title">{{ item.title }}</div>
                <div class="price">{{ item.price }} TL</div>
            </div>
        </div>
        <div class="complate-box">
            <span @click="goBasket()">Sepete Git</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    methods: {
        goBasket() {
            this.$router.push('/basket-preview');
            this.$emit('goBasket')
        }
    },
    computed: {
        ...mapGetters({
            getBasket: 'getBasket',
        })
    }
}
</script>

<style scoped>
.context-wrapper {
    z-index: 10;
    background-color: #fff;
    position: absolute;
    right: 0;
    border: 1px solid #dee2e6;
    padding: 8px 0;
    filter: drop-shadow(0px 8px 12px rgba(0, 0, 0, 0.15));
    border-radius: 5px;
    min-width: max-content;
}

.context-item {
    display: flex;
    padding: 0 16px;
    cursor: pointer;
    margin-bottom: 8px;
}

.image {
    margin-right: 12px;
}

.image img {
    width: 50px;
    height: 50px;
    object-fit: fill;
}

.content {
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
}

.title {
    font-size: 17px;
}

.title:hover {
    color: #2c313f;
}

.price {
    color: #1874ff;
    font-size: 12px
}

.complate-box {
    border-top: 1px solid #dee2e6;
    padding: 15px 0;
    text-align: center;
    justify-content: center !important;
    color: #1874ff;
}

.complate-box span {
    cursor: pointer;
}

.border-bottom {
    border-bottom: 1px solid #eff1f3;
}
</style>
