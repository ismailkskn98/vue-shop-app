<template>
    <div class="container">
        <div class="preview-card">
            <div v-for="(item, i) in $store.getters.getBasket" :key="i" class="preview-item">
                <div class="image">
                    <img :src="item.image" />
                </div>
                <div class="content">
                    <div class="title">{{ item.title }}</div>
                    <div class="price">{{ item.price }} Tl</div>
                </div>
            </div>
        </div>
        <div class="total">Toplam Fiyat: {{ Number($store.getters.getBasketTotal.toFixed(2)) }} TL </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.container {
    padding: 0 64px;
    margin-top: 30px;
    margin-bottom: 50px;
}

.preview-card {
    display: flex;
    flex-direction: column;
    border: 1px solid #d9dde0;
    border-radius: 5px;
    padding: 20px;
    background-color: white;
}

.preview-item {
    display: flex;
}

.preview-item .image {
    margin-right: 20px;
}

.image img {
    width: 150px;
    height: auto;
    object-fit: fill;
}

.content {
    font-weight: 500;
    display: flex;
    flex-direction: column;
}

.price {
    margin-top: 4px;
    color: #1874ff;
    font-size: 12px;
}

.total {
    color: #374051;
    font-size: 32px;
    font-weight: 600;
    margin-top: 15px;
}
</style>