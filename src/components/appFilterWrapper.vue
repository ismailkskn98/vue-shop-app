<template>
    <div class="filters-wrapper">
        <div class="filters">
            <div @click="newCategory(category)" v-for="(category, index) in categories" :key="index" class="category"
                :class="activeCategory === category ? 'activeCategory' : ''">{{
                    category }}</div>
        </div>
        <div @click="shortModeChange()" class="order">
            Sıralı {{ shortMode === 'asc' ? 'A-Z' : 'Z-A' }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        categories: {
            type: Array,
        },
        shortMode: {
            type: String,
        }
    },
    data() {
        return {
            activeCategory: '',
        }
    },
    methods: {
        shortModeChange() {
            const newShortMode = this.shortMode === 'asc' ? 'desc' : 'asc';
            this.$emit('newShort-event', newShortMode);
        },
        newCategory(category) {
            this.activeCategory = this.activeCategory === category ? '' : category;
            this.$emit('activeCategory-event', this.activeCategory);
        }
    }
}
</script>

<style scoped>
.filters-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
}

.filters-wrapper .filters {
    display: flex;
    align-items: center;
    gap: 20px;
}

.filters-wrapper .filters .category {
    background-color: #fafafa;
    padding: 4px 12px;
    border: 1px solid #d9dde0;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
    border-radius: 15px;
    cursor: pointer;
}

.filters-wrapper .filters .category.activeCategory {
    background-color: #1874ff;
    color: white;
    transition: all .2s ease;
}

.order {
    cursor: pointer;
}
</style>