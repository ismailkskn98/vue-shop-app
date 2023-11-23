<template>
    <div class="card">
        <div @click="onClickBox(product)" :class="product.inBox ? 'boxActive' : ''" class="box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff9b53"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
        </div>
        <img :src="product.image" :alt="product.title">
        <div class="title">{{ product.title }}</div>
        <div class="price">{{ product.price }} TL</div>
        <div @click="$router.push(`/product-detail/${product.id}`)" class="detay">
            Detay
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object
        }
    },
    data() {
        return {}
    },
    methods: {
        onClickBox(product) {
            const basketArr = [...this.$store.getters.getBasket];
            const isExistInBasket = basketArr.find(item => item.id === product.id)
            if (isExistInBasket) {
                console.log('Sepette');
                if (this.product.id === product.id) {
                    product.inBox = false;
                }
                this.$store.dispatch('removeBasket', product)
            } else {
                console.log('Sepette değil');
                if (this.product.id === product.id) {
                    product.inBox = true;
                }
                this.$store.dispatch('setBasket', product)
            }
        }
    },
}
</script>

<style scoped>
.card {
    color: white;
    font-size: 20px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
    padding: 15px;
    border: 1px solid rgb(187, 187, 187);
    color: black;
    position: relative;
    overflow: hidden;
}

.box {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    border: 1px solid #ff9b53;
    padding: 5px;
    cursor: pointer;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
}

.box,
.box svg {
    transition: all .2s ease;
}

.box:hover {
    background-color: #ff9b53;
}

.box:hover svg {
    stroke: white;
}

.box.boxActive,
.box.boxActive svg {
    background-color: #ff9b53;
    stroke: white;
}

.card .title {
    overflow: hidden;
    font-size: 16px;
    margin: 10px 0;
    text-wrap: nowrap;
    text-overflow: ellipsis;
}

.card .price {
    color: #1874ff;
}

.card img {
    max-height: 200px;
    object-fit: fill;
    margin-bottom: 15px;
}

.detay {
    position: absolute;
    bottom: -75px;
    left: 0;
    height: 75px;
    width: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #1874ff;
    transition: all .4s ease;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}


.card:hover .detay {
    bottom: 0;
}
</style>