<template>
    <div class="product-detail-card">
        <div class="imageSection">
            <img :src="detail.image" />
        </div>
        <div class="productInfoSection">
            <div class="title">Ürün Numarası #{{ detail.id }}</div>
            <div class="title">{{ detail.title }}</div>
            <div class="description">{{ detail.description }} </div>
            <div class="price">{{ detail.price }} Tl</div>
            <div class="rate">
                <svg v-for="(item, i) in 5" :key="i" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    viewBox="0 0 24 24" :fill="Math.floor(detail.rating.rate) >= item ? '#1874ff' : 'none'"
                    :stroke="Math.floor(detail.rating.rate) >= item ? '#1874ff' : 'currentColor'" stroke-width="1"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-star">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {{ detail.rating.count }} Değerlendirme
            </div>
            <div class="title title-category">
                Ürün Kategorisi
                <div class="category">
                    {{ detail.category }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.getProductById();
    },
    methods: {
        getProductById() {
            fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
                .then(res => res.json())
                .then(json => {
                    this.detail = json;
                })
        }
    },
    data() {
        return {
            detail: {
                id: null,
                title: '',
                category: '',
                description: '',
                image: '',
                price: null,
                rating: {
                    rate: null,
                    count: null,
                }
            }
        }
    }
}
</script>

<style scoped>
.product-detail-card {
    background-color: white;
    border: 1px solid #d9dde0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 50px;
    flex-wrap: wrap;
}

.category {
    background-color: #fafafa;
    padding: 4px 12px;
    border: 1px solid #d9dde0;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    border-radius: 15px;
    cursor: pointer;
    max-width: 150px;
}

.title-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.imageSection {
    margin-right: 32px;
}

.imageSection img {
    max-height: 450px;
}

.productInfoSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1100px;
}

.title {
    width: 100%;
    text-align: center;
    color: #374051;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 8px;
}

.description {
    color: #657282;
    font-size: 14px;
    font-weight: 400;
}

.price {
    margin: 8px 0;
    color: #1864ff;
    font-size: 24px;
    font-weight: 500;
}

.rate {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #657282;
    margin: 20px 0;
}
</style>