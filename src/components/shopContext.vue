<template>
    <div class="context-wrapper">
        <div class="context-item">
            <div class="image">
                <img src="" alt="" />
            </div>
            <div class="content">
                <div class="title">Başlık</div>
                <div class="price">100 TL</div>
            </div>
        </div>
        <div @click="goBasket()" class="context-item complate-box">
            Sepete Git
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goBasket() {
            this.$router.push('/basket-preview');
            this.$emit('goBasket')
        }
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
    max-width: 600px;
    min-width: 250px;
}

.context-item {
    display: flex;
    padding: 0 16px;
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
    align-items: center;
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
</style>
